/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'maroon-900': '#2B0206',
        'maroon-700': '#5A0F14',
        'gold-300': '#D9B26A', // Accessible text gold on dark bg
        'gold-500': '#BD7B34', // Decorative only
        'gold-700': '#6E4110', // Accessible text gold on light bg
        'sand-300': '#DDBEA1',
        'cream-100': '#F6E8DA',
        'ivory-50': '#FCF8EC',
        'ink': '#2B0206',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        // Fluid type scale
        'display': 'clamp(2.5rem, 5vw, 4rem)', // 40px to 64px
        'section': 'clamp(2rem, 4vw, 3rem)', // 32px to 48px
        'card': 'clamp(1.125rem, 2vw, 1.375rem)', // 18px to 22px
        'body': 'clamp(1rem, 1vw, 1.0625rem)', // 16px to 17px
        'micro': '0.75rem', // 12px
      },
      letterSpacing: {
        luxury: 'clamp(0.06em, 2vw, 0.15em)', // scales down tracking for larger text
        'wide-plus': '0.12em', // 0.12em for small uppercase labels
      },
      lineHeight: {
        'display': '1.15',
        'section': '1.25',
      },
      borderRadius: {
        'ui': '4px',
        'pill': '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};