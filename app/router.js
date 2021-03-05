'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app
    router.post('/user/login', controller.user.login)
    router.post('/user/register', controller.user.register)
    router.post('/user', controller.user.user)
    router.post('/addspecial/addspecial', controller.subject.addspecial) //30.新增专题
    router.get('/thematicManagement/thematicManagement', controller.subject.thematicManagement) //31.专题管理
    router.get('/orders/orders', controller.orders.orders) //8.订单列表
    router.get('/refund/refund', controller.refund.refund) //9.退款日志（退款列表)
    router.get('/promotion/promotion', controller.promotion.promotion) //11.订单促销
    router.get('/discountCoupon/discountCoupon', controller.discountCoupon.discountCoupon) //12.优惠券
    router.get('/couponIssuance/couponIssuance', controller.couponIssuance.couponIssuance) //13.优惠券发放
    router.get('/shoppingCard/shoppingCard', controller.shoppingCard.shoppingCard) //13.购物卡
    router.get('/shoppingCardUsage/shoppingCardUsage', controller.shoppingCardUsage.shoppingCardUsage) //13.购物卡使用
    router.get('/memberAccountNumber/memberAccountNumber', controller.memberAccountNumber.memberAccountNumber) //14.会员账号
    router.get('/accountLevel/accountLevel', controller.accountLevel.accountLevel) //15.账号等级
    router.get('/withdrawalList/withdrawalList', controller.withdrawalList.withdrawalList) //16.提现列表
    router.get('/transactionSettlement/transactionSettlement', controller.transactionSettlement.transactionSettlement) //17.交易结算
    router.get('/paymentLog/paymentLog', controller.paymentLog.paymentLog) //17.支付日志
    router.get('/myMessage/myMessage', controller.myMessage.myMessage) //23.我的消息
    router.get('/releaseMessage/releaseMessage', controller.releaseMessage.releaseMessage) //24.发布消息
    router.post('/addMessage/addMessage', controller.releaseMessage.addMessage) //24-2.新增消息
    router.post('/editMessage/editMessage', controller.releaseMessage.editMessage) //24-1.编辑消息
    router.post('/deleteMessage/deleteMessage', controller.releaseMessage.deleteMessage) //24-3.删除消息
    router.get('/advertisingLocation/advertisingLocation', controller.advertisingLocation.advertisingLocation) //25.广告位置
    router.post('/addAdvertisingLocation/addAdvertisingLocation', controller.advertisingLocation.addAdvertisingLocation) //25-1.新增广告位置
    router.post('/editAdvertisingLocation/editAdvertisingLocation', controller.advertisingLocation.editAdvertisingLocation) //25-2.编辑广告位置
    router.post('/deleteAdvertisingLocation/deleteAdvertisingLocation', controller.advertisingLocation.deleteAdvertisingLocation) //25-3.删除广告位置
    router.get('/advertisingList/advertisingList', controller.advertisingList.advertisingList) //26.广告列表
    router.post('/addAdvertisingList/addAdvertisingList', controller.advertisingList.addAdvertisingList) //26-1.新增广告列表
    router.post('/editAdvertisingList/editAdvertisingList', controller.advertisingList.editAdvertisingList) //26-2.编辑广告列表
    router.post('/deleteAdvertisingList/deleteAdvertisingList', controller.advertisingList.deleteAdvertisingList) //26-3.删除广告列表
    router.get('/articleManagement/articleManagement', controller.articleManagement.articleManagement) //28.文章管理
    router.post('/addArticle/addArticle', controller.articleManagement.addArticle) //27.新增文章
    router.get('/userGroup/userGroup', controller.userGroup.userGroup) //32.用户组
    router.post('/addUserGroup/addUserGroup', controller.userGroup.addUserGroup) //32-1.新增用户组
    router.post('/editUserGroup/editUserGroup', controller.userGroup.editUserGroup) //32-2.编辑用户组
}