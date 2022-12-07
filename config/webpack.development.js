const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getSettingsForStyles = require("./getSettingsForStyles");

module.exports = {
  mode: "development",
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.module\.s?css$/,
        use: [MiniCssExtractPlugin.loader, ...getSettingsForStyles(true)],
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: [MiniCssExtractPlugin.loader, ...getSettingsForStyles()],
      },
    ],
  },
};
