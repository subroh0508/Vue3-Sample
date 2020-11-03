const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../index.client.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build/client'),
    publicPath: '/',
    filename: 'client.bundle.js',
  },
  resolve: {
    alias: {
      vue: '@vue/runtime-dom/dist/runtime-dom.esm-bundler.js',
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /(\.css|\.scss)/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { esModule: false } },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: [
      path.resolve(__dirname, '../build/client'),
    ],
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.template.ejs'),
      filename: path.resolve(__dirname, '../build/client/index.html'),
    }),
  ],
});
