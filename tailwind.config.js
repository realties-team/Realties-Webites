/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colBlue01: "#192252",
        colBlue02: "#0E0854",
        colBlue03: "#252B42",
        colBlue04: "#000036",
        colGray01: "#848FAC",
        colGray02: "#A9B4CD",
        colBlack01: "#333333",

        bgTest: "#DA374326",
      },

      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
