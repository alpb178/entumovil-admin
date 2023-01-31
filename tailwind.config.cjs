/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'footer': '#1e2325',
      'hover': '#f30066',
      'color': '#969696',
      'footer-background': '#f5f5f5'
    },
    extend: {
      spacing: {
        '26': '26px',
        '204': '204px',
      }
    }
  },
  plugins: [],
});
