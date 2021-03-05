'use strict';

const Controller = require('egg').Controller;

class WithdrawalListController extends Controller {
    async withdrawalList() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let withdrawalLists = await this.ctx.model.WithdrawalList.find()
            ctx.body = {
                code: 200,
                msg: '获取提现列表成功',
                data: withdrawalLists
            }
        }
    }
}

module.exports = WithdrawalListController;