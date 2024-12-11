/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "f":"26rem"
        
      },
      width:{
         "f":"30rem",
         "fs":"50rem"
      }
    },
  },
  plugins: [],
}