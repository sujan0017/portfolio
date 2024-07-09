/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primaryBlue: "#090088",
        secondaryBlue: '#03002e',
        ascentYellow: '#FFFF00'
       },
       fontFamily:{
        poppinFont: ["Poppins", "sans-serif"],
       },
       
       fontSize: {
        'size-100': "0.563rem",
        'size-200': "0.75rem",
        'size-300': "1rem",
        'size-400': "1.333rem",
        'size-500': "1.777rem",
        'size-600': "2.369rem",
        'size-700': "3.157rem",
        'size-800': "4.209rem",
        'size-900': "5.61rem",
       }
    },
  },
  plugins: [],
}

