// 'use strict';

// const Controller = require('egg').Controller;

// class EvaluateController extends Controller {
//   async evaluate() {//商品评价
//     let {ctx,app} = this
//     let {name} = ctx.request.body
//     let res = await ctx.model.Goods.findOne({ //查询一个商品信息的数据
//       name
//     })
//     if (res) {//如果没有该商品
//       let evaluate = new app.model.Evaluate(ctx.request.body) //添加评论
//       await evaluate.save()
//       ctx.body = {
//         code: 200,
//         msg: '评价成功'
//       }
//     } else {
//       ctx.body = {
//         code: 500,
//         msg: '参数错误'
//       }
//     }
    
//   }
// }

// module.exports = EvaluateController;
