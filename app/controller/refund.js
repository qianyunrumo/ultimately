'use strict';

const Controller = require('egg').Controller;

class RefundController extends Controller {
    async refund() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let refunds = await this.ctx.model.Refund.find()
            ctx.body = {
                code: 200,
                msg: '获取退款日志信息成功',
                data: refunds
            }
        }
    }
}

module.exports = RefundController;