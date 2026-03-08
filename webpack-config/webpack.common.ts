import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";

/**
 * Общие настройки webpack для всех режимов
 */
const commonConfig: Configuration = {
  entry: path.resolve(__dirname, "../src/app/index.tsx"), // Entry point for your app

  output: {
    path: path.resolve(__dirname, "../build"), // Output directory
    filename: "bundle.js", // Output file name
    publicPath: "/", // Public path for assets
    clean: true, // Очистка папки build перед сборкой
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Handle .ts, .tsx, and .js extensions
    alias: {
      "@": path.resolve(__dirname, "../src"), // Alias for src directory
    },
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
      // CSS модули - должно быть ПЕРЕД общим правилом для .css
      {
        test: /\.module\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
                exportLocalsConvention: "camelCase",
              },
            },
          },
        ],
      },
      // Обычные CSS файлы (не модули)
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // HTML template
      inject: true, // Автоматически инжектировать скрипты в HTML
      filename: "index.html", // Имя выходного файла
    }),
  ],
};

export default commonConfig;
