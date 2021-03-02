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
  router.get('/goods/classify',controller.goods.classify)
  //商品评价
  // router.post('goods/evaluate',controller.goods.evaluate)
};
