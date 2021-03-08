'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/user/login',controller.user.login)
  router.post('/user/register',controller.user.register)
  router.post('/user',controller.user.user)
  //列表数据
  router.get('/menus',controller.menus.menus)
  //新增商品
  router.post('/add',controller.goods.add)
  //商品列表
  router.get('/goods',controller.goods.goods)
  //删除商品
  router.delete('/goods/delete',controller.goods.delete)
  //编辑商品
  router.post('/goods/edit',controller.goods.edit)
  //商品分类
  router.get('/goods/classify',controller.classify.classify)
  //新增分类
  router.post('/goods/addClassify',controller.classify.addClassify)
  //商品评价
  router.post('/goods/evaluate',controller.evaluate.evaluate)
  //删除二级分类
  router.delete('/goods/deleteClassify',controller.classify.deleteClassify)
  //删除一级分类
  router.delete('/goods/deletemainClassify',controller.classify.deletemainClassify)
  //新增商品折扣
  router.post('/goods/addDiscount',controller.discount.addDiscount)
  //查询商品折扣
  router.get('/goods/discount',controller.discount.discount)
};
