import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#E8EEF6',
          100: '#C5D3E8',
          200: '#9DB5D6',
          300: '#7597C4',
          400: '#4D79B2',
          500: '#2A5A9B',
          600: '#1E4480',
          700: '#142F5C',
          800: '#0B1F3A',
          900: '#060F1E',
        },
        gold: {
          DEFAULT: '#EAB308',
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },
        // Semantic
        background: '#F8FAFC',
        border: '#E5E7EB',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 3.75rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['clamp(1.875rem, 3vw, 2.625rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.25rem, 2vw, 1.875rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(11, 31, 58, 0.08)',
        'card-hover': '0 8px 40px rgba(11, 31, 58, 0.16)',
        'nav': '0 2px 16px rgba(11, 31, 58, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      maxWidth: {
        'container': '1280px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #060F1E 0%, #0B1F3A 50%, #142F5C 100%)',
        'dark-section': 'linear-gradient(135deg, #0B1F3A 0%, #142F5C 100%)',
        'gold-gradient': 'linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)',
      },
    },
  },
  plugins: [],
}

export default config
