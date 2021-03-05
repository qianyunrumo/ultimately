'use strict';

const Controller = require('egg').Controller;

class ShoppingCardController extends Controller {
    async shoppingCard() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let shoppingCards = await this.ctx.model.ShoppingCard.find()
            ctx.body = {
                code: 200,
                msg: '获取购物卡信息成功',
                data: shoppingCards
            }
        }
    }
}

module.exports = ShoppingCardController;