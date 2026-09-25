/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deepspace: '#0b0f19',
        charcoal: '#131825',
        slateCard: '#1a2234',
        accentPurple: '#a855f7',
        accentRose: '#f43f5e',
        softGold: '#e2b764',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
