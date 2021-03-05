'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
    async login() { //登录
        let {
            ctx
        } = this
        let {
            username,
            password
        } = ctx.request.body //获取前端数据
        let user = await ctx.model.User.findOne({ //查询一个用户信息的数据(所有增删查改必须要用await)
            username,
            password
        })
        if (user) {
            ctx.body = {
                code: 200,
                msg: '登录成功',
                data: user //返回user数据
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '用户名或密码不正确'
            }
        }
    }
    async register() { //注册
            let {
                ctx,
                app
            } = this
            let {
                username,
                password
            } = ctx.request.body
            let user = await ctx.model.User.findOne({ //查询一个用户信息的数据
                username
            })
            if (user) { //如果有
                ctx.body = {
                    code: 500,
                    msg: '用户已存在'
                }
            } else {
                let user = new app.model.User(ctx.request.body) //添加
                await user.save()
                ctx.body = {
                    code: 200,
                    msg: '注册成功'
                }
            }
        }
        // async user() { //删除
        //     let {
        //         id
        //     } = this.ctx.request.body
        //     let res = await this.ctx.model.User.findByIdAndRemove({
        //         _id: id
        //     })
        //     if (res) {
        //         this.ctx.body = {
        //             code: 200,
        //             msg: '删除成功' 
        //         }
        //     }else{
        //         this.ctx.body = {
        //             code: 500,
        //             msg: '删除失败'
        //         }
        //     }
        // }
    async user() { //修改
        let {
            id,
            username
        } = this.ctx.request.body
        let res = await this.ctx.model.User.findByIdAndUpdate({
            _id: id,
            username
        })
        if (res) {
            this.ctx.body = {
                code: 200,
                msg: '修改成功'
            }
        } else {
            this.ctx.body = {
                code: 500,
                msg: '修改失败'
            }
        }
    }

}

module.exports = UserController