module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        greyCrescendo: '#EBF0F2',
        blueCrescendo: '#8BD9D9',
        greenCrescendo: '#03A688',
        coalCrescendo: '#3E5951',
        mossCrescendo: '#658C81',
        blueRevolution: '#2c409a',
        orangeRevolution: '#f37649',
        beigeRevolution: '#c2b3a6',
        blue2024: '#c1d8d2',
        pink2024: '#f8b7b8',
        pink2_2024: '#f4c0c4',
        pink3_2024: '#fbebec',
        blueGreyDark2024: '#383d36',
        blueGrey2024: '#4f5750',
        blueGreyMedium2024: '#828b88',
        pinkText2024: '#b88a8c',
        blueText2024: '#899a97',
      },
      backgroundImage: {
        notfound: `url('/static/404.png')`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
