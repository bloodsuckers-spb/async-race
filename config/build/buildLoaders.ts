import { BuildOptions } from './types/config';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.([cm]?ts|tsx)$/,
    loader: 'ts-loader',
    exclude: ['/node_modules/'],
  };

  const cssLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]',
            auto: /index\.css$/i
          },
        },
      },
    ],
  };

  const assetsResource = {
    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
    type: options.isDev ? 'asset/resource' :  'asset',
  };

  return [typescriptLoader, cssLoader, assetsResource];
}
