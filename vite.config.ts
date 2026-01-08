
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

// Get the directory name using import.meta.url, the modern ESM way
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  // =========================================
  // PLUGINS
  // =========================================
  plugins: [
    react()
  ],

  // =========================================
  // PATH ALIASES (matches tsconfig.json)
  // =========================================
  resolve: {
    alias: {
      // This single alias is the source of truth, matching tsconfig.json
      '@': path.resolve(__dirname, './src'),
    }
  },

  // =========================================
  // DEVELOPMENT SERVER
  // =========================================
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    open: true,
    cors: true,
  },

  // =========================================
  // PREVIEW SERVER (for testing production builds)
  // =========================================
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
    open: true
  },

  // =========================================
  // BUILD CONFIGURATION
  // =========================================
  build: {
    outDir: 'dist',
    sourcemap: true, // Enable sourcemaps for debugging production issues
    minify: 'esbuild',
    target: 'modules', // Target modern browsers supporting ES modules
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Organize assets into subfolders
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      }
    },
    assetsInlineLimit: 4096,
    emptyOutDir: true,
    reportCompressedSize: true
  },

  // =========================================
  // PERFORMANCE OPTIMIZATIONS
  // =========================================
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
  },

  // =========================================
  // ENVIRONMENT VARIABLES
  // =========================================
  envPrefix: 'VITE_',
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },

  // =========================================
  // CSS CONFIGURATION
  // =========================================
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js'
  },
  
  // =========================================
  // SECURITY
  // =========================================
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp']
});
