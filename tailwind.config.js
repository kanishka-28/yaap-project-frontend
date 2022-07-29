module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'linkedin': '#0e76a8',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
