'use strict';

const Controller = require('egg').Controller;

class TransactionSettlementController extends Controller {
    async transactionSettlement() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let transactionSettlements = await this.ctx.model.TransactionSettlement.find()
            ctx.body = {
                code: 200,
                msg: '获取交易结算信息成功',
                data: transactionSettlements
            }
        }
    }
}

module.exports = TransactionSettlementController;