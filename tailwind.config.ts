import type { Config } from 'tailwindcss';

/**
 * Madhav Miles design tokens.
 * Palette direction: deep forest/navy-green primary, warm sand secondary,
 * terracotta/gold accent, warm-white background, charcoal text.
 * Deliberately avoids generic SaaS purple/blue.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f6f4',
          100: '#dfeae4',
          200: '#bfd5ca',
          300: '#95b8a8',
          400: '#699783',
          500: '#4a7a66',
          600: '#376151',
          700: '#2c4c41',
          800: '#233c34',
          900: '#1c302a',
          950: '#0f1c18',
        },
        sand: {
          50: '#fbf8f3',
          100: '#f5eee1',
          200: '#ead9c1',
          300: '#dcc09b',
          400: '#cca173',
          500: '#c08c58',
          600: '#a8714a',
          700: '#8b593e',
          800: '#714938',
          900: '#5d3e30',
        },
        terracotta: {
          50: '#fdf5f2',
          100: '#fbe8e0',
          200: '#f6cfc0',
          300: '#eeae96',
          400: '#e2836a',
          500: '#d25f42',
          600: '#bf4830',
          700: '#a03928',
          800: '#843225',
          900: '#6e2d23',
        },
        charcoal: {
          DEFAULT: '#26241f',
          light: '#4b4741',
          muted: '#7a746b',
        },
        cream: '#fdfaf5',
        // Semantic aliases
        brand: {
          DEFAULT: '#2c4c41',
          dark: '#1c302a',
          light: '#4a7a66',
        },
        accent: {
          DEFAULT: '#c05a3a',
          soft: '#e2836a',
          gold: '#c08c58',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],
        eyebrow: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.18em' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        input: '8px',
        btn: '10px',
        card: '14px',
        media: '20px',
      },
      boxShadow: {
        card: '0 8px 30px rgba(28, 48, 42, 0.08)',
        'card-hover': '0 16px 44px rgba(28, 48, 42, 0.13)',
        pill: '0 6px 20px rgba(28, 48, 42, 0.14)',
        header: '0 1px 0 rgba(38, 36, 31, 0.08)',
      },
      maxWidth: {
        reading: '46rem',
        shell: '82rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.3s ease-out both',
        'slide-in-right': 'slide-in-right 0.28s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
