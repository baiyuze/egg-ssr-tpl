'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const name = require('../../config/webpack.common').SPARouter;
const ReactDOMServer = require('react-dom/server');
const React = require('react');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { app } = ctx;
    const filepath = path.join(app.config.view.root[0], `client/${name}`);
    const jsBundleFunc = await app.webpack.fileSystem.readWebpackMemoryFile(`${filepath}.js`);
    const cssBundle = await app.webpack.fileSystem.readWebpackMemoryFile(`${filepath}.css`);
    // const HTMLElement = React.createElement(eval(jsBundleFunc)(ctx.req, {}));

    // const HTML = ReactDOMServer.renderToString(HTMLElement);
    console.log(jsBundleFunc, 'HTML')

    await ctx.render('index.tpl', { jsBundleFunc, cssBundle });
  }
}

module.exports = HomeController;
