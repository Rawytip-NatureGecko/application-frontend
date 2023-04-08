/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'stellar':{
          'purple':'#2B0022',
          'blue': '#051427',
          'red': '#530F1E',
          'orange': '#A44322',
          'yellow': '#F8BC04',
          'blood':'#6E1207',
          'warm':'#FCF7D4'
        }
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}

