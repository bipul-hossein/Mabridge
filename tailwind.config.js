/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    // add other template paths as needed
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00796B",
          light: "#26A69A",
          dark: "#004D40",
        },
        secondary: "#FFA000",
        accent: "#FF5722",
      },
    },
  },
  plugins: [],
};
