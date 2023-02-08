import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => ({
  port: options.port,
  hot: true,
  open: true,
  historyApiFallback: {
    rewrites: [{ from: /\/*/, to: '/' }],
  },
});
