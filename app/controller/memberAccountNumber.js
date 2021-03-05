'use strict';

const Controller = require('egg').Controller;

class MemberAccountNumberController extends Controller {
    async memberAccountNumber() { //查询
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let memberAccountNumbers = await this.ctx.model.MemberAccountNumber.find()
            ctx.body = {
                code: 200,
                msg: '获取会员账号信息成功',
                data: memberAccountNumbers
            }
        }
    }
}

module.exports = MemberAccountNumberController;