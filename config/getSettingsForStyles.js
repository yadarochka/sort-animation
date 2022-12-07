const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getSettingsForStyles = (withModules) => {
  return [
    !withModules
      ? "css-loader"
      : {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[hash:base64]",
            },
          },
        },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["autoprefixer"],
        },
      },
    },
    "sass-loader",
  ];
};

module.exports = getSettingsForStyles;
