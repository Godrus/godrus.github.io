import { Configuration } from "webpack";

/**
 * Настройки webpack для режима продакшена
 */
const prodConfig: Configuration = {
  mode: "production",

  devtool: "source-map", // Source maps для продакшена

  optimization: {
    minimize: true, // Минификация кода
  },
};

export default prodConfig;
