/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "#626262",
      footer: "#1e2325",
      "gradient-for": "#6d1017",
      "gradient-to": "#592036",
      "gradient-for-footer": "#161427",
      "gradient-to-footer": "#592036",
      hover: "#f30066",
      color: "#969696",
      red: "#fd4632",
      "footer-background": "#f5f5f5",
    },
    extend: {
      spacing: {
        26: "26px",
        204: "204px",
        231: "231",
        92: "92",
        600: "600",
      },
    },
  },
  plugins: [],
});
