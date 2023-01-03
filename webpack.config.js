const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { NetlifyPlugin } = require('netlify-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
// const isDev = mode === 'development';
const SOURCES = path.resolve(__dirname, 'src');
const OUTPUT = path.resolve(__dirname, 'dist');

module.exports = {
  mode,
  context: SOURCES,
  entry: './index.ts',
  output: {
    publicPath: '/',
    path: OUTPUT,
    filename: 'bundle.[contenthash:8].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@components': path.resolve(SOURCES, 'components'),
      '@base': path.resolve(SOURCES, 'base'),
      '@models': path.resolve(SOURCES, 'models'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Async-race',
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
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
    new ESLintPlugin({ extensions: 'ts' }),
  ],
  devServer: {
    hot: true,
    historyApiFallback: {
      rewrites: [{ from: '/*', to: '/' }],
    },
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
