const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pink: "#FFA29E",
      lightbrown: "#D1823C",
      lightred: "#D26259",
      cream: "#FFB875",
      matcha: "#B7B16B",
    },
    extend: {
      fontFamily: {},
    },
    screens: {
      xs: {min: "390px", max: "539px"},
      sm: {min: "540px", max: "719px"},
      md: {min: "720px", max: "959px"},
      lg: {min: "960px", max: "1139px"},
      xl: {min: "1140px", max: "1319px"},
      "2xl": {min: "1320px"},
    },
  },
  plugins: [],
});
