/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "style-purple": "#BFB2FF",
        "darkest-black": "#1E1E1E",
        "darker-black": "#333333",
        "dark-black": "#808080",
        "style-silver": "#9E9E9E",
        "style-green": "#B5FFC1",
        "style-blue": "#B5DAFF",
        "style-yellow": "#FFDC81",
        "style-orange": "#FF9580",
      },
    },
  },
  plugins: [],
};
