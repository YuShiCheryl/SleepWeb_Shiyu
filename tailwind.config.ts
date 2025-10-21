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
        'sleep-blue': {
          50: '#e6f1ff',
          100: '#b3d7ff',
          200: '#80bdff',
          300: '#4da3ff',
          400: '#1a89ff',
          500: '#0066cc',
          600: '#004d99',
          700: '#003d7a',
          800: '#002d5c',
          900: '#001d3d',
          950: '#001529',
        },
        'sleep-orange': {
          50: '#fff5e6',
          100: '#ffe0b3',
          200: '#ffcb80',
          300: '#ffb64d',
          400: '#ffa11a',
          500: '#ff8c00',
          600: '#cc7000',
          700: '#995400',
          800: '#663800',
          900: '#331c00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

