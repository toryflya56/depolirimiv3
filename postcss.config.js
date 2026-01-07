export default {
  plugins: {
    // ==========================================
    // TAILWIND CSS
    // ==========================================
    // Processes Tailwind directives (@apply, @layer, etc.)
    tailwindcss: {},

    // ==========================================
    // AUTOPREFIXER
    // ==========================================
    // Adds vendor prefixes for cross-browser compatibility
    // Uses browserslist from package.json
    autoprefixer: {},

    // ==========================================
    // CSSNANO (Production Only)
    // ==========================================
    // Minifies CSS for production builds
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              {
                // Optimization options
                discardComments: {
                  removeAll: true, // Remove all comments
                },
                normalizeWhitespace: true, // Minimize whitespace
                colormin: true, // Optimize color values
                minifyFontValues: true, // Optimize font declarations
                minifyGradients: true, // Optimize gradients
                
                // Safety options (prevent breaking changes)
                calc: false, // Don't optimize calc() (can break)
                reduceIdents: false, // Don't minify @keyframes names
                zindex: false, // Don't reorder z-index values
              },
            ],
          },
        }
      : {}),
  },
};
