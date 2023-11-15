/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yaseva: ["Yeseva One", ...defaultTheme.fontFamily.sans],
        playfair: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        prata: ["Prata", ...defaultTheme.fontFamily.sans],
        sacramento: ["Sacramento", ...defaultTheme.fontFamily.sans],
        "dm-serif": ["DM Serif Display", ...defaultTheme.fontFamily.sans],
        fira: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-green": "#284135",
        "gray-me": "#C4C3BD",
        "white-me": "#F3F2F1",
      },
    },
  },
  plugins: [],
};
