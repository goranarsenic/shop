const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  optimization: {
    usedExports: true
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    progress: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
