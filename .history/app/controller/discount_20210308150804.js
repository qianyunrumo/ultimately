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
  async delDiscount() {//删除商品折扣
    let {id} = this.ctx.request.body
    let res = await this.ctx.model.Discount.findByIdAndRemove({
      _id: id
    })
    if (res) {
      this.ctx.body = {
        code: 200,
        msg: '删除折扣成功'
      }
    } else {
      this.ctx.body = {
        code: 500,
        msg: '删除折扣失败'
      } 
    }
  }
}

module.exports = DiscountController;
