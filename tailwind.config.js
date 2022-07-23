const typography = require("@tailwindcss/typography");

module.exports = {
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
      mono: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [typography],
};
