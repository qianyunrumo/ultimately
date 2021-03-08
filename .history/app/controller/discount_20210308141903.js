'use strict';

const Controller = require('egg').Controller;

class DiscountController extends Controller {
  async addDiscount() {
    let {ctx,app} = this
    let {disName, start_time, end_time,discount_way,dis_status,dis_goods} = ctx.request.body
  }
}

module.exports = DiscountController;
