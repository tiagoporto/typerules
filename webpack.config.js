// webpack.config.js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: path.join(__dirname, 'src/test.html')
    })
  ],
  devServer: {
    open: true,
    overlay: true,
    inline: true,
    watchContentBase: true,
    hot: true,
    contentBase: [
      path.join(__dirname, 'src')
    ]
  }
}

module.exports = config
