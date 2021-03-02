'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async add() {//新增商品
    let {ctx,app} = this
    let {name} = ctx.request.body
    let res = await ctx.model.Goods.findOne({ //查询一个用户信息的数据
      name
    })
    if (res) {//如果有
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
  };
  async goods() {//商品列表
    let good = await this.ctx.model.Goods.find() 
      this.ctx.body = {
        code: 200,
        data: good
      }
  };
  async delete() {//删除商品
    let {id} = this.ctx.request.body
    let res = await this.ctx.model.Goods.findByIdAndRemove({
      _id: id
    })
    if (res) {
      this.ctx.body = {
        code: 200,
        msg: '删除商品成功'
      }
    } else {
      this.ctx.body = {
        code: 500,
        msg: '删除商品失败'
      }
    }
  };
  async edit() { //编辑商品
    let {id, name, classify, metering, status, price, postage, pic} = this.ctx.request.body
    let res = await this.ctx.model.Goods.findByIdAndUpdate(id, {name, classify, metering, status, price, postage, pic})
    if (res) {
      this.ctx.body = {
        code: 200,
        msg: '修改成功'
      }
    } else {
      this.ctx.body = {
        code: 500,
        msg: '修改失败'
      }
    }
  };
}

module.exports = GoodsController;
