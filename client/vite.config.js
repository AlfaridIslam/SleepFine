import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  assetsInclude: ["**/*.jpg", "**/*.JPG", "**/*.png"], // Include other asset types as needed

  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-regular-svg-icons'],
          carousel: ['react-slick', 'slick-carousel'],
          utils: ['axios', 'html2canvas', 'jspdf', 'qrcode.react'],
          cloudinary: ['@cloudinary/react', '@cloudinary/url-gen', 'cloudinary-core'],
          bootstrap: ['bootstrap', 'react-bootstrap'],
          helmet: ['react-helmet'],
          spinner: ['react-loader-spinner'],
        },
      },
    },
    // Enable chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging
    sourcemap: false,
    // Minify CSS
    cssMinify: true,
    // Minify JS
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      'react-slick',
      'slick-carousel',
      'axios',
      'react-helmet',
      'react-loader-spinner',
    ],
  },

  // Server configuration for development
  server: {
    // Enable HMR
    hmr: true,
    // Optimize for faster refresh
    watch: {
      usePolling: false,
    },
  },

  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './src/components/tests/setup.jsx', 
  }
})

