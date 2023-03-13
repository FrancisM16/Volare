/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Poppins']
      },
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
    },
    container:{
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    }
  },
  plugins: [],
}
