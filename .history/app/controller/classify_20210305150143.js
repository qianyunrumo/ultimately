'use strict';

const Controller = require('egg').Controller;
const mongoose = require('mongoose')

class ClassifyController extends Controller {
  async classify() {//商品分类列表
    let list = await this.ctx.model.Classify.find() 
    this.ctx.body = {
      code: 200,
      data: list,
      meta: {
        msg: '获取商品分类成功',
        status: 200 
      }
    }
  };
  async addClassify() {//新增商品分类
    let {ctx,app} = this
    let {main_class, sub_class, pic} = ctx.request.body
    //生成不重复ID
    let random_id = (Math.random()*10000000).toString(16).substr(0,4)+(new Date()).getTime()+Math.random().toString().substr(2,5)
    let data = {//分类数据，如果没有此大分类，则添加该数据
      main_class: main_class,
      secondary_class:[
        {
          _id: random_id,
          sub_class: sub_class,
          pic: pic
        },
      ]
    }
    let flag = await app.model.Classify.find({main_class: main_class})//查找是否拥有当前一级分类
    if(flag.length>0){
      let res = await app.model.Classify.findOneAndUpdate({main_class: main_class},{$addToSet:{secondary_class:{
        //找到拥有的一级分类并向分类中添加次级分类
        //$addToSet向数组中添加一个元素,如果存在就不添加
        _id: random_id,
        sub_class: sub_class,
        pic: pic
      }}})
      if(res){
        ctx.body = {
          msg: '添加分类成功',
          code: 200
        }
      }else{
        ctx.body = {
          msg: '添加分类失败111',
          code: 500
        }
      }
    }else{
      let res = new app.model.Classify(data)
      await res.save()
      if(res){
        ctx.body = {
          msg: '添加分类成功',
          code: 200
        }
      }else{
        ctx.body = {
          msg: '添加分类失败',
          code: 500
        }
      }
    }
  };
  async deleteClassify() {//删除分类
    let {_id} = this.ctx.request.body
    let res = await this.ctx.model.Classify.remove({
      _id
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
