/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  // plugins: [],

  theme: {
    extend: {
      colors: {
       // primary: '#1D4ED8', // Custom blue
       primary :  {
        DEFAULT: '#17A2B8',  // Main primary color
        50:  '#E3F8FC',  // Lightest
        100: '#C5EFF8',
        200: '#A1E3F2',
        300: '#79D6EB',
        400: '#6cdbed',
        500: '#17A2B8',  // Main primary color
        600: '#138496',  // Darker shade for primary
        700: '#0F6674',
        800: '#0B4852',
        900: '#072A30',  // Darkest
      },
        secondary: '#9333EA', // Custom purple
        
      },
     
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Keep existing sans font
        quicksand: ['Quicksand', 'sans-serif'],  // Add Quicksand font
      },
    },
  },
  
}

