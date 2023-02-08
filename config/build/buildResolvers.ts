/* eslint-disable import/no-extraneous-dependencies */
import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': './',
    },
  };
}
