const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
  const ENV = process.env.NODE_ENV || 'development';
  const PORT = (env && env.port) || 8081;

  const config = {
    devServer: {
      port: PORT
    },
    entry: {
      app: ['./src/index.js']
    },
    context: path.resolve(__dirname, '.'),
    target: 'web',
    output: {
      path: path.resolve(path.join(__dirname, './dist')),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      publicPath: '/'
    },
    stats: {
      colors: true,
      chunks: false,
      modules: false,
    },
    resolve: {
      alias: {
        api: path.resolve(__dirname, './src/api'),
        store: path.resolve(__dirname, './src/store')
      }
    },
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx$/],
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
          use: 'file-loader?name=[name].[ext]?[hash]'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
        },
        {
          test: [/\.js$/, /\.jsx$/],
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template: './src/index.html',
        inject: 'body',
        hash: true,
        chunks: ['app'],
        filename: 'index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ENV)
      })
    ]
  };

  switch (ENV) {
    case 'production':
      config.devtool = 'source-map';
      break;
    case 'development':
      config.devtool = 'inline-source-map';
      break;
    case 'test':
      config.devtool = 'inline-source-map';
      delete config.entry;
      break;
    default:
      break;
  }

  return config;
};
