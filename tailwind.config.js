import fluid, { extract, screens, fontSize } from "fluid-tailwind";

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens,
    fontSize,
    extract,
    extend: {
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        bellefair: ['"Bellefair"', "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
     fluid
  ],
};
