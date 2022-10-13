/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24, 
      '2xl': 32,
    },
    colors: {

      transparent: 'transparent',

      black: '#000',
      white: '#FFF',

      'gray-900': '#121212',
      'gray-800': '#202020',
      'gray-400': '#7c7c7c',
      'gray-200': '#c4c4c4',
      'gray-100': '#e1e1e1',

      'orange-sons': '#F97316',
      'blue-sons': '#1e3a8a',
      'ligh-green-sons': '#a7f3d0'

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
