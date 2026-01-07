import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // ==========================================
  // PLUGINS
  // ==========================================
  plugins: [
    react()
  ],

  // ==========================================
  // PATH ALIASES (matches tsconfig.json)
  // ==========================================
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  },

  // ==========================================
  // DEVELOPMENT SERVER
  // ==========================================
  server: {
    port: 3000,
    strictPort: false, // Try next port if 3000 is taken
    host: true, // Listen on all addresses (0.0.0.0)
    open: true, // Auto-open browser
    cors: true,
    // Proxy API requests (if needed)
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },

  // ==========================================
  // PREVIEW SERVER (for testing production builds)
  // ==========================================
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
    open: true
  },

  // ==========================================
  // BUILD CONFIGURATION
  // ==========================================
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps for debugging (disable in production for security)
    sourcemap: process.env.NODE_ENV !== 'production',
    
    // Minification
    minify: 'esbuild', // Faster than terser
    
    // Target browsers (supports ES2020+)
    target: 'es2020',
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000, // KB
    
    // Rollup options for advanced optimization
    rollupOptions: {
      output: {
        // JS chunk naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    
    // Asset handling
    assetsInlineLimit: 4096, // 4KB - inline smaller assets as base64
    
    // Clear output directory before build
    emptyOutDir: true,
    
    // Report compressed size (disable for faster builds)
    reportCompressedSize: true
  },

  // ==========================================
  // PERFORMANCE OPTIMIZATIONS
  // ==========================================
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
    // Force re-optimization on changes
    force: false
  },

  // ==========================================
  // ENVIRONMENT VARIABLES
  // ==========================================
  envPrefix: 'VITE_', // Only expose vars starting with VITE_
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },

  // ==========================================
  // CSS CONFIGURATION
  // ==========================================
  css: {
    devSourcemap: true, // Enable CSS sourcemaps in dev
    postcss: './postcss.config.js' // PostCSS config file
  },

  // ==========================================
  // SECURITY
  // ==========================================
  // Prevent directory traversal
  publicDir: 'public',
  
  // MIME type validation
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp']
});