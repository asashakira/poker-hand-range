const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const _resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',

  output: {
    filename: 'main.js',
    path: _resolve('dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@src': _resolve('src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
}
