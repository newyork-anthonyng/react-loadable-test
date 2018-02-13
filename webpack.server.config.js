const path = require("path");

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
  }
};
