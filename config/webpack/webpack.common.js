const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { output } = require("../path.config");

module.exports = {
  entry: {
    app: "./src/index"
  },
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name]-lazy.[hash].js",
    path: output,
    publicPath: "/"
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "src/index.html"
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        enforce: "pre",
        use: "tslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        use: {
          loader: require.resolve("awesome-typescript-loader"),
          options: {
            useBabel: true,
            babelCore: "@babel/core"
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[hash]-[name].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              disable: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
