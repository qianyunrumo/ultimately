'use strict'

const Controller = require('egg').Controller;

class SubjectController extends Controller {
    async addspecial() { //新增专题
        const { ctx, app } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let subject = new app.model.Subject(ctx.request.body) //添加
            await subject.save()
            ctx.body = {
                code: 200,
                msg: '新增专题成功'
            }
        }
    }

    async thematicManagement() { //查询专题列表
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let thematicManagements = await this.ctx.model.Subject.find()
            ctx.body = {
                code: 200,
                msg: '获取专题列表成功',
                data: thematicManagements
            }
        }
    }
}

module.exports = SubjectController