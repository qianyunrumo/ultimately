'use strict';

const Controller = require('egg').Controller;

class AdvertisingListController extends Controller {
    async advertisingList() { //查询广告列表
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let advertisingLists = await this.ctx.model.AdvertisingList.find()
            ctx.body = {
                code: 200,
                msg: '获取广告列表成功',
                data: advertisingLists
            }
        }
    }



    async addAdvertisingList() { //新增广告
        let { ctx, app } = this
        let addAdvertisingLists = new app.model.AdvertisingList(ctx.request.body) //添加
        await addAdvertisingLists.save()
        ctx.body = {
            code: 200,
            msg: '新增广告成功'
        }
    }



    async editAdvertisingList() { //编辑广告
        let { id, name, Advertising_location, code, codes, Launch_date, end_date, address, Opening_mode, Sort_value, Background_color, state } = this.ctx.request.body
        let res = await this.ctx.model.AdvertisingList.findByIdAndUpdate(id, {
            name,
            Advertising_location,
            code,
            codes,
            Launch_date,
            end_date,
            address,
            Opening_mode,
            Sort_value,
            Background_color,
            state
        })
        if (res) {
            this.ctx.body = {
                code: 200,
                msg: '编辑广告成功'
            }
        } else {
            this.ctx.body = {
                code: 500,
                msg: '编辑失败'
            }
        }
    }



    async deleteAdvertisingList() { //删除广告
        let { id } = this.ctx.request.body
        let res = await this.ctx.model.AdvertisingList.findByIdAndRemove({
            _id: id
        })
        if (res) {
            this.ctx.body = {
                code: 200,
                msg: '删除广告成功'
            }
        } else {
            this.ctx.body = {
                code: 500,
                msg: '删除失败'
            }
        }
    }
}

module.exports = AdvertisingListController;