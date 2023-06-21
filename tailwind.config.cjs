/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "#626262",
      footer: "#1e2325",
      "legislation-gray": "#f4f4f5",
      "gradient-for": "#6d1017",
      "gradient-to": "#592036",
      "ocre-red": "#c42723",
      "link-red": "#fd6a5a",
      "gradient-for-footer": "#161427",
      "gradient-to-footer": "#592036",
      "field": "#E8F0FE",
      hover: "#f30066",
      color: "#969696",
      red: "#fd4632",
      button:'#004080',
      "footer-background": "#f5f5f5",
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      spacing: {
        26: "26px",
        204: "204px",
        231: "231",
        92: "92",
        98:"400px",
        600: "600",
        'logo-w': "20",
        'logo-h': "20",
      },
    },
  },
  plugins: [],
});
