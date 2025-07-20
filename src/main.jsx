import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SEOProvider } from './components/SEO'
import { ThemeProvider } from './hooks/useTheme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SEOProvider>
        <App />
      </SEOProvider>
    </ThemeProvider>
  </StrictMode>,
)
