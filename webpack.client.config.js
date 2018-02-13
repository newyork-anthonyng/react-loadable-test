const webpack = require("webpack");
const path = require("path");
const ReactLoadablePlugin = require("react-loadable/webpack").ReactLoadablePlugin;

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: {
    bundle: "./index.js",
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        exclude: /node_modules/,
        test: /\.js$/
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new ReactLoadablePlugin({
      filename: "./dist/react-loadable.json"
    })
  ]
};
