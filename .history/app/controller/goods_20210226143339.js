'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async add() {//新增商品
    let {ctx,app} = this
    let {name,classify} = ctx.request.body
    let goods = await ctx.model.Goods.findOne({ //查询一个用户信息的数据
      name
    })
    if (goods) { //如果有
      ctx.body = {
        code: 500,
        msg: '商品已存在'
      }
    } else {
      let goods = new app.model.Goods(ctx.request.body) //添加
      await goods.save()
      ctx.body = {
        code: 200,
        msg: '新增商品成功'
      }
    }
  }
}

module.exports = GoodsController;
