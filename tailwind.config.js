module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       backgroundImage: {
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
