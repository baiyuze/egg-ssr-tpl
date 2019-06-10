/* eslint valid-jsdoc: "off" */

'use strict';
const webpackConfigServer = require('./webpack.server');
const webpackConfigClient = require('./webpack.client');
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1559802344823_4662';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.view = {
    root: path.join(appInfo.baseDir, 'app/view')
  };

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.webpack = {
    port: 9000,
    browser: false,
    webpackConfigList: [webpackConfigClient, webpackConfigServer]
  };

  return {
    ...config,
    ...userConfig,
  };
};
