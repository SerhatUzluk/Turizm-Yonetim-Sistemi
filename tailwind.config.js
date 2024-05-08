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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        'yellow': '#fcba03',
        'pink':'#a8077d',    
=======
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
=======
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
=======
=======
        'yellow': '#fcba03',
        'pink':'#a8077d',    
>>>>>>> 4af3440045c819ee98a82ef0c8307a6f586a91d9
>>>>>>> 60c1d99e2f5c77b562142cc0279ee6b87884f9ce
        
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