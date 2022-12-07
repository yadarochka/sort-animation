const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const getSettingsForStyles = require("./getSettingsForStyles");

module.exports = {
  mode: production,
  output: {
    filename: "[name].[hash].js",
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.module\.s?css$/,
        use: [getSettingsForStyles(true)],
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: [getSettingsForStyles()],
      },
    ],
  },
};
