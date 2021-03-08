'use strict';

const Controller = require('egg').Controller;

class DiscountController extends Controller {
  async addDiscount() {//新增商品折扣
    let {ctx,app} = this
    // let {disName, start_time, end_time,discount_way,dis_status,dis_goods} = ctx.request.body
    let discount = new app.model.Discount(ctx.request.body) //添加
    await discount.save()
    ctx.body = {
      msg:'新增折扣成功',
      code: 200
    }
  };
  async discount() {//查询商品折扣
    let discount = await this.ctx.model.Discount.find()
    this.ctx.body = {
      data: discount,
      code: 200
    }
  }
}

module.exports = DiscountController;
