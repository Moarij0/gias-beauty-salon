import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#C9956C',
        'blush': '#F2C4CE',
        'ivory': '#FDFAF6',
        'cream': '#FAF0E6',
        'champagne': '#D4AF37',
        'charcoal': '#2C2C2C',
        'warm-gray': '#6B6B6B',
        'deep-rose': '#A0705A',
        'light-blush': '#FDE8ED',
        'gold-light': '#F0E0A0',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #C9956C 0%, #F2C4CE 50%, #D4AF37 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(242,196,206,0.6) 0%, rgba(201,149,108,0.4) 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F0E0A0 50%, #D4AF37 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
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
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(201, 149, 108, 0.2)',
        'card': '0 4px 24px rgba(44, 44, 44, 0.08)',
        'gold': '0 4px 24px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
