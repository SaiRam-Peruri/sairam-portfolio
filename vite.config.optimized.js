import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Performance optimizations
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
          email: ['@emailjs/browser']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  
  // Development optimizations
  server: {
    host: true,
    port: 3000,
    // Hot reload optimizations
    hmr: {
      overlay: false
    }
  },
  
  // Asset optimization
  assetsInclude: ['**/*.webp', '**/*.avif'],
  
  // Define environment
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  }
});
