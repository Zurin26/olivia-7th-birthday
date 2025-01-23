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
  },
  plugins: [],
});
