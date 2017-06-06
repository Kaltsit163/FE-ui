var utils = require('./utils')

const { join } = require('path')

const resolve = dir => join(__dirname, '..', dir)

module.exports = {
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
              limit: 10000,
              name: utils.assetsPath('fonts/[name].[ext]')
          }
        },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.less', '.scss'],
    modules: [resolve('src'), 'node_modules'],
    alias: {
      '@': resolve('src'),
      '~src': resolve('src'),
      '~components': resolve('src/components'),
      '~pages': resolve('src/pages'),
      '~assets': resolve('src/assets'),
      '~store': resolve('src/store'),
      '~static': resolve('src/static')
    }
  }
}
