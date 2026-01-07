/** @type {import('tailwindcss').Config} */
export default {
  // ==========================================
  // CONTENT PATHS (PurgeCSS)
  // ==========================================
  // Tailwind scans these files to generate only used classes
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  // ==========================================
  // DARK MODE
  // ==========================================
  // Options: 'media' (OS preference) or 'class' (manual toggle)
  darkMode: 'class',

  // ==========================================
  // THEME CUSTOMIZATION
  // ==========================================
  theme: {
    // Container settings
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },

    extend: {
      // ==========================================
      // CUSTOM COLORS (Brand Palette)
      // ==========================================
      colors: {
        // Cyber Blue (Primary Brand Color)
        cyber: {
          DEFAULT: '#00E0FF',
          50: '#E5FBFF',
          100: '#CCF7FF',
          200: '#99EFFF',
          300: '#66E7FF',
          400: '#33DFFF',
          500: '#00E0FF', // Main
          600: '#00B8CC',
          700: '#008A99',
          800: '#005C66',
          900: '#002E33',
          950: '#001719',
          dim: 'rgba(0, 224, 255, 0.1)',
          glow: 'rgba(0, 224, 255, 0.5)',
        },

        // Deep Blues (Background Hierarchy)
        deep: {
          950: '#02040a',
          900: '#080c1b',
          800: '#0f172a',
          700: '#1e293b',
          600: '#334155',
        },
      },

      // ==========================================
      // TYPOGRAPHY
      // ==========================================
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }], // 10px
        'xs': ['0.75rem', { lineHeight: '1rem' }],        // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1' }],             // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],          // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],           // 72px
        '8xl': ['6rem', { lineHeight: '1' }],             // 96px
        '9xl': ['8rem', { lineHeight: '1' }],             // 128px
      },

      // ==========================================
      // SPACING & SIZING
      // ==========================================
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },

      // ==========================================
      // ANIMATIONS
      // ==========================================
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 224, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 224, 255, 1)' },
        },
      },

      // ==========================================
      // SHADOWS
      // ==========================================
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 224, 255, 0.3)',
        'glow': '0 0 20px rgba(0, 224, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 224, 255, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(0, 224, 255, 0.2)',
      },

      // ==========================================
      // BORDER RADIUS
      // ==========================================
      borderRadius: {
        '4xl': '2rem',   // 32px
        '5xl': '2.5rem', // 40px
        '6xl': '3rem',   // 48px
      },

      // ==========================================
      // BACKDROP BLUR
      // ==========================================
      backdropBlur: {
        xs: '2px',
      },

      // ==========================================
      // Z-INDEX
      // ==========================================
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // ==========================================
      // TRANSITIONS
      // ==========================================
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '2000': '2000ms',
      },

      // ==========================================
      // BREAKPOINTS (Custom Screens)
      // ==========================================
      screens: {
        'xs': '475px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },

  // ==========================================
  // PLUGINS
  // ==========================================
  plugins: [
    // Custom utility plugin for glassmorphism
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(8, 12, 27, 0.6)',
          backdropFilter: 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          border: '1px solid rgba(0, 224, 255, 0.15)',
        },
        '.glass-dark': {
          background: 'rgba(2, 4, 10, 0.8)',
          backdropFilter: 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          border: '1px solid rgba(0, 224, 255, 0.1)',
        },
        '.text-glow': {
          textShadow: '0 0 10px rgba(0, 224, 255, 0.8)',
        },
        '.text-glow-strong': {
          textShadow: '0 0 20px rgba(0, 224, 255, 1), 0 0 30px rgba(0, 224, 255, 0.5)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};