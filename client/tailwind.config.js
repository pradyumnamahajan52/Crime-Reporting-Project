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
       primary : '#17A2B8',
        secondary: '#9333EA', // Custom purple
        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  
}

