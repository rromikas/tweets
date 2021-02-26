const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        purgecss({
          content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
        }),
      ],
    },
  },
};
