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
        'yellow': '#fcba03',
        'pink':'#a8077d',        

        
        'instagram':'#E1306C',
        'twitter':'#1DA1F2',
        'facebook':'#1877F2',
        'whatshap':'#25D366',
        'youtube':'#FF0000',
        'google':'#EA4335',
        'visa':'#0080ff',
        'Mastercard':'#f9373c',
        'telegram':'#007FFF'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}