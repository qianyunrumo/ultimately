'use strict';

const Controller = require('egg').Controller;

class PromotionController extends Controller {
    async promotion() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let promotions = await this.ctx.model.Promotion.find()
            ctx.body = {
                code: 200,
                msg: '获取订单促销信息成功',
                data: promotions
            }
        }
    }
}

module.exports = PromotionController;