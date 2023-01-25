/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E8BFF",
          hover: "#3D98FF",
        },
        error: {
          DEFAULT: "#CC393A",
          hover: "#CC5151",
        },
        success: {
          DEFAULT: "#22CC47",
          hover: "#4BCC67",
        },
      },

      fontFamily: {
        sans: ["var(--font-lato)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
