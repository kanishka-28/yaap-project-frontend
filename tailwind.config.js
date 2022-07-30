module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'linkedin': '#0e76a8',
        'facebook': '#4267B2',
        'twitter': '#1DA1F2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
