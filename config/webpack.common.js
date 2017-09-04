const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const paths = require('./paths');

const VENDOR_LIBS = [
  'axios', 'immutable', 'lodash', 'react', 'react-dom', 'react-redux',
  'redux', 'styled-components',
];

module.exports = {
  entry: {
    bundle: paths.appIndexJs,
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(otf|ttf|svg|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([paths.appBuild], { root: paths.projectRoot }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
};
