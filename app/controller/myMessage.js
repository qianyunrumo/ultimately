'use strict';

const Controller = require('egg').Controller;

class MyMessageController extends Controller {
    async myMessage() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let myMessages = await this.ctx.model.MyMessage.find()
            ctx.body = {
                code: 200,
                msg: '获取我的消息列表成功',
                data: myMessages
            }
        }
    }
}

module.exports = MyMessageController;