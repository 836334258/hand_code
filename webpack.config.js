const path = require('path')
const WebpackDevServer = require('webpack-dev-server')

/**
 * @type {require('webpack').Configuration}
 */
const config = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'esbuild-loader',
        options: {
          loader: 'ts', // Or 'ts' if you don't need tsx
          target: 'esNext',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
  },
}

module.exports = config
