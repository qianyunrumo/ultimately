'use strict';

const Controller = require('egg').Controller;

class UserGroupController extends Controller {
    async userGroup() { //用户组列表
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let userGroups = await this.ctx.model.UserGroup.find()
            ctx.body = {
                code: 200,
                msg: '获取用户组列表成功',
                data: userGroups
            }
        }
    }


    async addUserGroup() { //新增用户组
        const { ctx, app } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let addUserGroups = new app.model.UserGroup(ctx.request.body) //添加
            await addUserGroups.save()
            ctx.body = {
                code: 200,
                msg: '新增专题成功'
            }
        }
    }


    async editUserGroup() { //编辑用户组
        let { id, name, describe, modular, Sort_value, state } = this.ctx.request.body
        let res = await this.ctx.model.UserGroup.findByIdAndUpdate(id, {
            name,
            describe,
            modular,
            Sort_value,
            state
        })
        if (res) {
            this.ctx.body = {
                code: 200,
                msg: '编辑用户组成功'
            }
        } else {
            this.ctx.body = {
                code: 500,
                msg: '编辑失败'
            }
        }
    }
}

module.exports = UserGroupController;