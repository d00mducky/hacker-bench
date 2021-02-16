const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./app/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  devtool: "eval",
};
