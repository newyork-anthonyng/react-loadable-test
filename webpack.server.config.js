const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  context: path.resolve(__dirname, "routes"),

  entry: "./index.js",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "indexRoute.js",
    libraryTarget: "commonjs2"
  },

  target: "node",

  module: {
    rules: [
      {
        use: "babel-loader",
        exclude: /node_modules/,
        test: /\.js$/
      }
    ]
  },

  externals: [nodeExternals()]
};
