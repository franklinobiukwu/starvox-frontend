/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      grey: colors.grey,
      'navy': '#0A0E3F',
      'yellow': '#FFD700',
      black: colors.black,
      'gray88': '#E0E0E0',
    },
  },
  plugins: [],
}

