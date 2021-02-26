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
};
