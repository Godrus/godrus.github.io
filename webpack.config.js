const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Make sure to import HtmlWebpackPlugin

module.exports = {
  entry: "./src/index.tsx", // Entry point for your app
  output: {
    path: path.resolve(__dirname, "build"), // Output directory, use path.resolve to get an absolute path
    filename: "bundle.js", // Output file name
    publicPath: "/", // Public path for assets
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Handle .ts, .tsx, and .js extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle .ts and .tsx files with TypeScript loader
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Handle SCSS files
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: "./build", // Use 'static' instead of 'contentBase'
    historyApiFallback: true, // For single-page apps
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Ensure the HTML template exists
    }),
  ],
  mode: "development", // Set mode to "development"
};
