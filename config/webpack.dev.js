const Merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
});
