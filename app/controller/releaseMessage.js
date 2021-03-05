'use strict';

const Controller = require('egg').Controller;

class ReleaseMessageController extends Controller {
    async releaseMessage() { //发布消息列表
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let releaseMessages = await this.ctx.model.ReleaseMessage.find()
            ctx.body = {
                code: 200,
                msg: '获取发布消息列表成功',
                data: releaseMessages
            }
        }
    }

    async addMessage() { //新增消息
        let { ctx, app } = this
        let Messages = new app.model.ReleaseMessage(ctx.request.body) //添加
        await Messages.save()
        ctx.body = {
            code: 200,
            msg: '新增成功'
        }
    }

    async editMessage() { //编辑消息
        let { id, title, type, Member_group, date, top, state } = this.ctx.request.body
        let res = await this.ctx.model.ReleaseMessage.findByIdAndUpdate(id, {
            title,
            type,
            Member_group,
            date,
            top,
            state
        })
        if (res) {
            this.ctx.body = {
                code: 200,
                msg: '编辑成功'
            }
        } else {
            this.ctx.body = {
                code: 500,
                msg: '操作失败'
            }
        }
    }

    async deleteMessage() {
        let { id } = this.ctx.request.body
        let res = await this.ctx.model.ReleaseMessage.findByIdAndRemove({
            _id: id
        })
        if (res) {
            this.ctx.body = {
                code: 200,
                msg: '删除成功'
            }
        } else {
            this.ctx.body = {
                code: 500,
                msg: '删除失败'
            }
        }
    }

}

module.exports = ReleaseMessageController;