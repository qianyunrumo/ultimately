'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async add() {//新增商品
    let {ctx,app} = this
        let {username,password} = ctx.request.body
        let user = await ctx.model.User.findOne({ //查询一个用户信息的数据
            username
        })
        if (user) { //如果有
            ctx.body = {
                code: 500,
                msg: '用户已存在'
            }
        } else {
            let user = new app.model.User(ctx.request.body) //添加
            await user.save()
            ctx.body = {
                code: 200,
                msg: '注册成功'
            }
        }
  }
}

module.exports = GoodsController;
