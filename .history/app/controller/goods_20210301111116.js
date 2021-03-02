'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async add() {//新增商品
    let {ctx,app} = this
    let {name} = ctx.request.body
    let goods = await ctx.model.Goods.findOne({ //查询一个用户信息的数据
      name
    })
    if (goods) {//如果有
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
  async classify() {//商品分类列表
    let res = await this.ctx.model.Goods.find() 
    if(res){
      this.ctx.body = {
        code: 200,
        data: [
          {
            id: 131,
            authName: '数码产品',
            path: null,
            pid: 0,
            children: [
              {
                id: 227,
                authName: '手机配件',
                path: null,
                pid: 101,
                children: [
                  {
                    id: 339,
                    authName: '贴膜，保护套',
                    path: null,
                    pid: '104,101'
                  }
                ]
              }
            ]
          },
        ],
        meta: {
          msg: '获取商品分类成功',
          status: 200 
        }
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
  }
}

module.exports = GoodsController;
