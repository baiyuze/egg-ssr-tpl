'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const name = require('../../config/webpack.common').SPARouter;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { app } = ctx;
    const filepath = path.join(app.config.view.root[0], `server/${name}`);
    const jsBundle = await app.webpack.fileSystem.readWebpackMemoryFile(`${filepath}.js`);
    const cssBundle = await app.webpack.fileSystem.readWebpackMemoryFile(`${filepath}.css`);
    ctx.render('index.tpl', { jsBundle, cssBundle });
  }
}

module.exports = HomeController;
