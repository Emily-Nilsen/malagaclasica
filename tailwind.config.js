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
      },
      backgroundImage: {
        'texture-one': "url('/static/crescendo-texture-one.webp')",
        'texture-two': "url('/static/crescendo-texture-two.webp')",
        'texture-three': "url('/static/crescendo-texture-three.webp')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
