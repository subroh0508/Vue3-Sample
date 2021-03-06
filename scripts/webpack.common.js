const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders:{
            scss: 'style-loader!css-loader!sass-loader',
          },
        },
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${mode}"`,
      },
    }),
  ],
}
