/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '676px',
      xl: '1440',
    },
    extend: {
       colors: {
        primaryBlue: "#090088",
        secondaryBlue: '#03002e',
        ascentYellow: '#FFFF00'

       }
    },
  },
  plugins: [],
}

