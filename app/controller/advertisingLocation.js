'use strict';

const Controller = require('egg').Controller;

class AdvertisingLocationController extends Controller {
    async advertisingLocation() { //查询广告位置列表
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let advertisingLocations = await this.ctx.model.AdvertisingLocation.find()
            ctx.body = {
                code: 200,
                msg: '获取广告位置列表成功',
                data: advertisingLocations
            }
        }
    }

    async addAdvertisingLocation() { //新增广告位置
        let { ctx, app } = this
        let addAdvertisingLocations = new app.model.AdvertisingLocation(ctx.request.body) //添加
        await addAdvertisingLocations.save()
        ctx.body = {
            code: 200,
            msg: '新增成功'
        }
    }

    async editAdvertisingLocation() { //编辑广告位置
        let { id, name, describe, Display_mode, code, platform, width, height, type, picture, Background_color, state } = this.ctx.request.body
        let res = await this.ctx.model.AdvertisingLocation.findByIdAndUpdate(id, {
            name,
            describe,
            Display_mode,
            code,
            platform,
            width,
            height,
            type,
            picture,
            Background_color,
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

    async deleteAdvertisingLocation() { //删除广告位置
        let { id } = this.ctx.request.body
        let res = await this.ctx.model.AdvertisingLocation.findByIdAndRemove({
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

module.exports = AdvertisingLocationController;