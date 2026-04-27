import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black:   '#111827',
          accent:  '#00D2A0',
          tech:    '#334155',
          slate:   '#94A3B8',
          surface: '#F8FAFC',
          canvas:  '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Share Tech Mono"', 'monospace'],
        sans:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
