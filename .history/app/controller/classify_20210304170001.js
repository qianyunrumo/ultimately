'use strict';

const Controller = require('egg').Controller;

class ClassifyController extends Controller {
  async classify() {//商品分类列表
    let list = await this.service.classify.GetClassify() 
    this.ctx.body = {
      code: 200,
      data: list,
      meta: {
        msg: '获取商品分类成功',
        status: 200 
      }
    }
  };
  async addClassify() {//新增分类
    let {ctx,app} = this
    let {authName} = ctx.request.body
    if(authName && authName != ''){
      let classifys = new app.model.Classify(ctx.request.body)//添加
      await classifys.save()
      ctx.body = {
        msg: '添加分类成功',
        status: 200
      }
    }
  };
  async deleteClassify() {//删除分类
    let {id} = this.ctx.request.body
    let res = await this.ctx.model.Classify.findByIdAndRemove({
      _id : id
    })
    if(res){
      this.ctx.body = {
        msg: '删除成功',
        status: 200
      }
    }
  };
}

module.exports = ClassifyController;
