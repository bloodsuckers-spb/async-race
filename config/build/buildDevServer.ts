import { BuildOptions } from './types/config';

// eslint-disable-next-line import/order
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    hot: true,
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /\/*/, to: '/' }], // ''/*'
    },
  };
}
