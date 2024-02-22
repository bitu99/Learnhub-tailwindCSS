const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    screens: {
      'xs': '1275px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

