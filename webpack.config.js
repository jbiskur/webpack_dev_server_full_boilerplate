var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080/",
      "./src/app.js"
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      },
      { test: /\.(jpe?g|png|gif)$/i, loader:"file-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Test Space",
      hash: true,
      template: "./src/index.ejs"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      jquery: "jquery",
    }),
    new webpack.DefinePlugin({
      Tether: "tether",
      "window.Tether": "tether"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    overlay: {
      warnings: false,
      errors: true
    },
    compress: true,
    hot: true,
    inline: true,
    open: true
  },
  devtool: "#eval-source-map"
};