# 🚀 Deployment Guide for Sai Ram Peruri Portfolio

## Vercel Deployment Instructions

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Node.js 18+ installed locally

### Step 1: Prepare Your Repository

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Create GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it: `sairam-portfolio` or `portfolio`
   - Make it public for better visibility

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/sairam-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Environment Variables

Add these environment variables in Vercel Dashboard:
- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID  
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

### Step 4: Custom Domain (Optional)

1. **Purchase Domain** (optional):
   - Namecheap, GoDaddy, or any domain provider
   - Recommended: `sairamperuri.dev` or `sairamp.dev`

2. **Configure Domain in Vercel**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Step 5: Performance Optimization

The `vercel.json` configuration includes:
- ✅ Static asset caching
- ✅ SPA routing support
- ✅ Performance headers
- ✅ Build optimization

### Expected URLs

After deployment, your portfolio will be available at:
- **Vercel URL**: `https://sairam-portfolio.vercel.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

### Continuous Deployment

Every push to the `main` branch will automatically trigger a new deployment on Vercel.

### Monitoring & Analytics

Vercel provides built-in:
- **Performance Analytics**: Core Web Vitals tracking
- **Function Logs**: For debugging
- **Deployment History**: Rollback capabilities
- **Real-time Monitoring**: Uptime and performance

### Troubleshooting

1. **Build Failures**:
   ```bash
   # Test build locally
   npm run build
   npm run preview
   ```

2. **Environment Variables Not Working**:
   - Ensure variables start with `VITE_`
   - Redeploy after adding variables

3. **404 Errors**:
   - Check `vercel.json` rewrites configuration
   - Ensure React Router is properly configured

### Portfolio Features Deployed

✅ **Responsive Design** - Works on all devices  
✅ **Dark/Light Theme** - Automatic theme switching  
✅ **Contact Form** - EmailJS integration  
✅ **Resume Downloads** - PDF documents available  
✅ **SEO Optimized** - Meta tags and social sharing  
✅ **Performance Optimized** - Fast loading times  
✅ **Professional Content** - Complete portfolio sections  

### Post-Deployment Checklist

- [ ] Test contact form functionality
- [ ] Verify resume downloads work
- [ ] Check theme switching
- [ ] Test on mobile devices
- [ ] Validate SEO meta tags
- [ ] Confirm all sections load properly
- [ ] Test external links (GitHub, LinkedIn)

### Marketing Your Portfolio

1. **Update LinkedIn**: Add portfolio URL to profile
2. **GitHub Profile**: Pin the repository and add live URL
3. **Email Signature**: Include portfolio link
4. **Resume**: Add portfolio URL
5. **Job Applications**: Reference portfolio in cover letters

---

**Ready to deploy? Your professional portfolio awaits! 🚀**

*Need help? Contact: sairam.peruri.work@gmail.com*
