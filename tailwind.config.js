/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"]				
      },
      colors: {
        'light': '#DCF2F1',
        'lightBlue': '#7FC7D9',
        'blue': '#365486',
        'darkBlue': '#0F1035',
      },
    },
  },
  plugins: [],
}