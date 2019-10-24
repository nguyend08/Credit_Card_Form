const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const APP_DIR = path.resolve(__dirname, './app/index.js')
const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}