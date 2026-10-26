/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2b3077',
          light: '#3d44a0',
          dark: '#1e2257',
          soft: '#F0EFFF',
        },
        accent: {
          DEFAULT: '#FF7AB6',
          light: '#FFB3D4',
          soft: '#FFF0F7',
        },
        background: '#FAFAF9',
        surface: '#FFFFFF',
        foreground: '#1A1A2E',
        muted: '#64647A',
        border: '#EBEBF0',
      },
      borderRadius: {
        card: '1.5rem',
        pill: '9999px',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(43, 48, 119, 0.08)',
        'card-hover': '0 12px 40px rgba(43, 48, 119, 0.16)',
        button: '0 8px 24px rgba(43, 48, 119, 0.35)',
        glow: '0 0 40px rgba(43, 48, 119, 0.4)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #2b3077 0%, #4a52b8 40%, #FF7AB6 100%)',
        'gradient-soft': 'linear-gradient(135deg, #F0EFFF 0%, #FFF0F7 100%)',
        'gradient-button': 'linear-gradient(135deg, #2b3077 0%, #4a3fa0 50%, #FF7AB6 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'blob-morph': 'blob-morph 8s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(43, 48, 119, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(43, 48, 119, 0.6)' },
        },
        'blob-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};