'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  webpack: {
    enable: true,
    package: 'egg-webpack',
  },

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  }
};
