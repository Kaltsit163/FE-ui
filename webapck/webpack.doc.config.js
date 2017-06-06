const { join } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const basicConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = dir => join(__dirname, '..', dir)

module.exports = merge(basicConfig, {
  entry: {
    'js/app': './src/main.js',
    'js/vendor': [
      'vue'
    ]
  },
  devtool: 'false',
  output: {
    path: resolve('docs'),
    filename: '[name].js',
    chunkFilename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: ['css-loader']
            }),
            less: ExtractTextPlugin.extract({
              use: ['css-loader', 'less-loader', 'scss-loader']
            })
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:8].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin(['docs'], {
      root: resolve('./')
    })
  ]
})
