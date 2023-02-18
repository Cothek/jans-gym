/** @type {import('tailwindcss').Config} */
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
        secondary: "#E17FB3",
        "secondary-dark": "#A74A7E",
        white: "#FFFFFF",
        dark: "#394856",
        light: "#9DADBC",
      },
      backgroundImage: {
        "supplements-pattern": "url('/supplements.svg')",
      },
    },
  },
  plugins: [],
};
