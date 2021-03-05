'use strict';

const Controller = require('egg').Controller;

class CouponIssuanceController extends Controller {
    async couponIssuance() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let couponIssuances = await this.ctx.model.CouponIssuance.find()
            ctx.body = {
                code: 200,
                msg: '获取优惠券发放信息成功',
                data: couponIssuances
            }
        }
    }
}

module.exports = CouponIssuanceController;