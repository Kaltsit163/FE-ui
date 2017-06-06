var path = require('path')
const { join } = require('path')
const merge = require('webpack-merge')
const basicConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = dir => join(__dirname, '..', dir)

module.exports = merge(basicConfig, {
  entry: {
    app: './src/index.js'
  },
  devtool: 'false',
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'index.js',
    library: 'jo-ui',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve('./')
    })
  ]
})
