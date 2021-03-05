'use strict';

const Controller = require('egg').Controller;

class DiscountCouponController extends Controller {
    async discountCoupon() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let discountCoupons = await this.ctx.model.DiscountCoupon.find()
            ctx.body = {
                code: 200,
                msg: '获取优惠券信息成功',
                data: discountCoupons
            }
        }
    }
}

module.exports = DiscountCouponController;