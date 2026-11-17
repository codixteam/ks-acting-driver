/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        pearl: {
          DEFAULT: '#F8F6F2', // Warm Pearl Silk Canvas
          light: '#FBF9F5',
          dark: '#EFECE5',
          border: '#EAE3D9',
        },
        ink: {
          DEFAULT: '#0F172A', // Deep Luxury Slate/Ink
          soft: '#1E293B',
          muted: '#64748B',
          subtle: '#94A3B8',
        },
        champagne: {
          DEFAULT: '#BFA15F', // Brushed Champagne Gold
          light: '#DFCDA4',
          dark: '#9A7E40',
          hairline: '#EAE3D9',
        },
        maroon: {
          DEFAULT: '#7A1C29', // Regal Wine / Heritage Maroon
          dark: '#5E121E',
          light: '#9E2A3A',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1faa52',
          light: '#3ae37a',
        },
        surface: '#F8F6F2',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 12px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.03)',
        'premium': '0 12px 32px -8px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'elevated': '0 20px 48px -12px rgba(15, 23, 42, 0.12), 0 8px 20px -4px rgba(191, 161, 95, 0.1)',
        'glow-whatsapp': '0 8px 24px -4px rgba(37, 211, 102, 0.35)',
        'glow-champagne': '0 8px 24px -4px rgba(191, 161, 95, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.92' },
        },
      },
    },
  },
  plugins: [],
}
