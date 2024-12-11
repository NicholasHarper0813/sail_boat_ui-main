const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./content/**/*.md", "./assets/js/*.js", "./content/**/*.html", "./content/docs/**/*.html", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.black,
        secondary: colors.slate,
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
