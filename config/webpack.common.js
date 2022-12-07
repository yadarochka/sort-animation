const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rootPath = path.join(__dirname, "..");
const srcPath = path.join(rootPath, "src");

module.exports = {
  entry: path.join(srcPath, "index.tsx"),
  output: {
    path: path.join(rootPath, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "template", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 7 * 1024, // 7kB
          },
        },
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(eot|woff2|woff?)$/,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
};
