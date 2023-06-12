/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveatBrush': ['"Caveat Brush"', 'cursive'],
      },
      colors: {
        'main-yellow': '#F8CC5D',
        'main': '#1F343E',
        'dark': '#45565E',
        'main-blue': '#4EB3E3',
        'main-red': '#ED6F82',
        'light-gray': '#6D7A80',
        'dark-gray': '#375360',

      },
      fontSize: {
        '15': '15px',
        '32': '32px',
      },
      maxWidth: {
        '256': '256px',
        '312': '312px',
        '544': '544px',
        '1120': '1120px',
      }
    },

  },
  plugins: [],
}
