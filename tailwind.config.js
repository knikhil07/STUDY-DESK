/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "f":"26rem",
        "30":"30rem",
        "90":"90%"
        
      },
      width:{
         "f":"30rem",
         "fs":"50rem",
         "90":"90%"
      }
    },
  },
  plugins: [],
}