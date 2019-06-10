const babelrc = require('./babelrc.json');
const path = require('path');

// server和client entry必须保持一致
const SPARouter = "zhaoziyuan";

exports.SPARouter = SPARouter;
// server entry
exports.serverEntry = {
  [SPARouter]: path.join(process.cwd(), 'web/src/render/serverRouter.js')
};

// client entry
exports.clientEntry = {
  [SPARouter]: path.join(process.cwd(), 'web/src/render/clientRouter.js')
}

// server out
exports.serverOut = {
  filename: '[name].js',
  path: path.join(process.cwd(), 'app/view/server'),
  libraryTarget: 'commonjs'
}

// client out
exports.clientOut = {
  filename: '[name].js',
  path: path.join(process.cwd(), 'app/view/client'),
  libraryTarget: 'commonjs'
}
// 解析文件类型
exports.resolve = {
  alias: {
    action: path.join(__dirname, './web/action')
  },
  extensions: ['.js', '.jsx']
}

// babel配置
exports.babel = {
  test: /\.(jsx|js)?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: babelrc
  }
}

// 图片配置
exports.images = {
  test: [/\.bmp$/, /\.gif$/, /\.jpg$/, /\.png$/, /\.webp$/],
  loader: require.resolve('url-loader'),
  options: {
    limit: 10000,
    name: 'static/media/[name].[hash:8].[ext]',
  },
}
