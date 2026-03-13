import path from "path";
import { Configuration } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

/**
 * Настройки webpack для режима разработки
 */
const devConfig: Configuration & { devServer?: DevServerConfiguration } = {
  mode: "development",

  devtool: "eval-source-map", // Source maps для отладки

  devServer: {
    static: {
      directory: path.join(__dirname, "../public"), // Статические файлы из public
    },
    historyApiFallback: true, // For single-page apps
    hot: true, // Hot Module Replacement
    open: true, // Автоматически открывать браузер
    port: 27015, // Порт для dev server
    compress: true, // Сжатие
  },
};

export default devConfig;
