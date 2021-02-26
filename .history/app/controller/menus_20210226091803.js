'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async menus() {
    let res = await this.ctx.model.Menus.find()
      if (res) {
        this.ctx.body = {
          code: 200,
          msg: '修改成功'
        }
      }
  }
}

module.exports = MenuController;
