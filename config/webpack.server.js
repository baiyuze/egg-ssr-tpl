const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackCommon = require('./webpack.common');

//服务端配置
const serverConfig = {
  target: 'node',
  entry: webpackCommon.serverEntry,
  resolve: webpackCommon.resolve,
  output: webpackCommon.serverOut,
  mode: process.env.NODE_ENV,
  externals: [nodeExternals()],
  module: {
    rules: [
      webpackCommon.babel,
      webpackCommon.images,
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
          }
        ]
      }
    ]
  }
};


module.exports = serverConfig;