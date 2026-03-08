import { merge } from 'webpack-merge';
import { Configuration } from 'webpack';
import commonConfig from './webpack.common';
import devConfig from './webpack.dev';
import prodConfig from './webpack.prod';
/**
 * Основной файл конфигурации webpack
 * Объединяет общие настройки с настройками для конкретного режима
 */
const config = (env: unknown, argv: { mode?: string }): Configuration => {
  const isProduction: boolean = argv?.mode === 'production';

  if (isProduction) {
    return merge(commonConfig, prodConfig);
  }

  return merge(commonConfig, devConfig);
};

export default config;
