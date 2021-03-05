'use strict';

const Controller = require('egg').Controller;

class PaymentLogController extends Controller {
    async paymentLog() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let paymentLogs = await this.ctx.model.PaymentLog.find()
            ctx.body = {
                code: 200,
                msg: '获取支付日志信息成功',
                data: paymentLogs
            }
        }
    }
}

module.exports = PaymentLogController;