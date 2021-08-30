module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    extend: {
      colors: {
        "t-dark": "#010101",
        't-light': '#676767',
        'bink-108': "#ED017F",
        'bink-light': '#FFEAF5',
        'v-bink': 'rgba(252, 224, 239, 0.2)'
      },
      borderColor:{
        'bink-108': "#ED017F",
        'bink-120': '#FFEAF5'
      },
      gradientColorStops: {
        'bink-120': '#FFEAF5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
