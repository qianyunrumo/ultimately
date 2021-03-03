'use strict';

const Controller = require('egg').Controller;

class ClassifyController extends Controller {
  async classify() {//商品分类列表
    let list = await this.service.classify.GetClassify() 
    this.ctx.body = {
      code: 200,
      data: list,
      meta: {
        msg: '获取商品分类成功',
        status: 200 
      }
    }
  };
}

module.exports = ClassifyController;
