'use strict';

const Controller = require('egg').Controller;

class AccountLevelController extends Controller {
    async accountLevel() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let accountLevels = await this.ctx.model.AccountLevel.find()
            ctx.body = {
                code: 200,
                msg: '获取会员等级信息成功',
                data: accountLevels
            }
        }
    }
}

module.exports = AccountLevelController;