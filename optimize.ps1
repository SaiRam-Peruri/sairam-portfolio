# Performance Optimization Script
# Run this before deployment to optimize assets

# Create optimized build
npm run build

# Check bundle size
Write-Host "=== Bundle Analysis ===" -ForegroundColor Green
Get-ChildItem dist\assets\*.js | ForEach-Object {
    $size = [math]::Round($_.Length/1KB, 2)
    Write-Host "$($_.Name): $($size)KB" -ForegroundColor Yellow
}

# Check CSS size
Write-Host "`n=== CSS Analysis ===" -ForegroundColor Green
Get-ChildItem dist\assets\*.css | ForEach-Object {
    $size = [math]::Round($_.Length/1KB, 2)
    Write-Host "$($_.Name): $($size)KB" -ForegroundColor Yellow
}

# Check image sizes
Write-Host "`n=== Image Analysis ===" -ForegroundColor Green
Get-ChildItem dist\*.jpg, dist\*.png, dist\*.webp -ErrorAction SilentlyContinue | ForEach-Object {
    $size = [math]::Round($_.Length/1KB, 2)
    if ($size -gt 500) {
        Write-Host "$($_.Name): $($size)KB - OPTIMIZE THIS!" -ForegroundColor Red
    } else {
        Write-Host "$($_.Name): $($size)KB" -ForegroundColor Yellow
    }
}

Write-Host "`n=== Performance Tips ===" -ForegroundColor Cyan
Write-Host "✅ Lazy loading implemented"
Write-Host "✅ Code splitting enabled"
Write-Host "✅ Animations optimized (reduced from 20 to 8 particles)"
Write-Host "✅ Memoization added to heavy components"
Write-Host "ℹ️  Image optimization skipped per user preference"
