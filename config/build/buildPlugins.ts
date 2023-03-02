import { BuildOptions } from './types/config';

import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { NetlifyPlugin } from 'netlify-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import webpack from 'webpack';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      title: 'Async-race',
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
    }),
    new NetlifyPlugin({
      redirects: [
        {
          from: '/*',
          to: '/',
          status: 200,
        },
      ],
    }),
    new StylelintPlugin(),
    new ESLintPlugin({ extensions: ['ts'] }),
  ];
}
