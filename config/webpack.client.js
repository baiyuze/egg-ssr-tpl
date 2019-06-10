const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ManifestPlugin = require('webpack-manifest-plugin');
const webpackCommon = require('./webpack.common');

//客户端
const clientConfig = {
  entry: webpackCommon.clientEntry,
  output: webpackCommon.clientOut,
  mode: process.env.NODE_ENV,
  resolve: webpackCommon.resolve,
  devtool: 'source-map',
  module: {
    rules: [
      webpackCommon.babel,
      webpackCommon.images,
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('precss'),
                require('autoprefixer')
              ],
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              // modifyVars: theme   //antd默认主题样式
            }
          }
        ],
      },
    ]
  },

  plugins: [
    // 提取样式，生成单独文件
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[name].chunk.css`
    }),
    new ManifestPlugin()
  ]

};

module.exports = clientConfig;