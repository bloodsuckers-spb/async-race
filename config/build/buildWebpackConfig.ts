import webpack from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      publicPath: '/',
      filename: 'bundle.[contenthash:8].js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      path: paths.build,
      clean: true,
    },
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options),
  };
}
