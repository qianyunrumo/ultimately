'use strict';

const Controller = require('egg').Controller;

class ShoppingCardUsageController extends Controller {
    async shoppingCardUsage() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let shoppingCardUsages = await this.ctx.model.ShoppingCardUsage.find()
            ctx.body = {
                code: 200,
                msg: '获取购物卡使用信息成功',
                data: shoppingCardUsages
            }
        }
    }
}

module.exports = ShoppingCardUsageController;