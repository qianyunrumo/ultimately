'use strict';

const Controller = require('egg').Controller;

class ClassifyController extends Controller {
  async classify() {//商品分类列表
    let res = await this.ctx.model.Goods.find() 
    if(res){
      this.ctx.body = {
        code: 200,
        data: [
          {
            id: 131,
            authName: '数码产品',
            path: null,
            pid: 0,
            children: [
              {
                id: 227,
                authName: '手机配件',
                path: null,
                pid: 101,
                children: [
                  {
                    id: 339,
                    authName: '贴膜，保护套',
                    path: null,
                    pid: '104,101'
                  }
                ]
              }
            ]
          },
        ],
        meta: {
          msg: '获取商品分类成功',
          status: 200 
        }
      }
    }
  };
}

module.exports = ClassifyController;
