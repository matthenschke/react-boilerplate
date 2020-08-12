const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // used for building html that will have our react app

module.exports = {
  entry: "./src/index.js", // entry file
  output: {
    path: path.join(__dirname, "/build"), // index.js that will have all of our components will be compiled in build folder
    filename: "bundle.js", // file name
  },
  module: {
    rules: [
      {
        test: /\.(js | jsx)$/, // look for js or jsx files, / is the delimiter
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
