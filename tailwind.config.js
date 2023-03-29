/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1CA8ED",
        "primary-dark": "#0c6997",
        secondary: "#E17FB3",
        "secondary-dark": "#A74A7E",
        white: "#FFFFFF",
        dark: "#394856",
        light: "#9DADBC",
        "light-dark": "hsl(209, 19%, 58%)",
      },
      screens: {
        xs: "376px",
        ...defaultTheme.screens,
      },
      backgroundImage: {
        "supplements-pattern": "url('/supplements-pattern.svg')",
      },
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["Ultra", "serif"],
      },
    },
  },
  plugins: [],
};
