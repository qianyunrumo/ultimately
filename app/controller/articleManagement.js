'use strict';

const Controller = require('egg').Controller;

class ArticleManagementController extends Controller {
    async articleManagement() { //查询文章管理列表
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            let articleManagements = await this.ctx.model.ArticleManagement.find()
            ctx.body = {
                code: 200,
                msg: '获取文章管理列表成功',
                data: articleManagements
            }
        }
    }

    async addArticle() { //新增文章
        let { ctx, app } = this
        let addArticles = new app.model.ArticleManagement(ctx.request.body) //添加
        await addArticles.save()
        ctx.body = {
            code: 200,
            msg: '新增文章成功'
        }
    }
}

module.exports = ArticleManagementController;