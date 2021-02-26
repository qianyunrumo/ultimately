'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async menus() {
    let res = await this.ctx.model.Menus.find()
    this.ctx.body = {
      
    }
  }
}

module.exports = MenuController;
