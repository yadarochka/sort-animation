const { merge } = require("webpack-merge");

const commonConfig = require("./config/webpack.common");

const ENV =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = () => {
  const config = require("./config/webpack." + ENV);
  return merge(commonConfig, config);
};
