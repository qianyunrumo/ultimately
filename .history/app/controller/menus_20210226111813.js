'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async menus() {
    let res = await this.ctx.model.Menus.find()
      if (res) {
        this.ctx.body = {
          code: 200,
          data:[
            {
              id: 101,
              authName: "首页",
              path: '/'
            },
            {
              id: 102,
              authName: "商品",
              path: null,
              children: [
                {
                  id: 201,
                  authName: "商品首页",
                  path: '/goods/index',
                  children: []
                },
                {
                  id: 202,
                  authName: "商品管理",
                  path: null,
                  children: [
                    {
                      id: 301,
                      authName: "新增商品",
                      path: '/goods/admin/create',
                      children: []
                    },
                    {
                      id: 302,
                      authName: "商品列表",
                      path: '/goods/admin/list',
                      children: []
                    }
                  ]
                },
                {
                  id: 203,
                  authName: "商品配置",
                  path: null,
                  children: [
                    {
                      id: 303,
                      authName: "商品分类",
                      path: '/goods/setting/category',
                      children: []
                    }
                  ]
                },
                {
                  id: 204,
                  authName: "评论咨询",
                  path: null,
                  children: [
                    {
                      id: 304,
                      authName: "商品评论",
                      path: '/goods/opinion/comment',
                      children: []
                    },
                    {
                      id: 305,
                      authName: "客服咨询",
                      path: '/goods/opinion/consult',
                      children: []
                    }
                  ]
                },
              ]
            },
            {
              id: 103,
              authName: "订单",
              path: null,
              children: [
                {
                  id: 205,
                  authName: "订单首页",
                  path: '/order/index',
                  children: []
                },
                {
                  id: 206,
                  authName: "订单管理",
                  path: null,
                  children: [
                    {
                      id: 306,
                      authName: "订单列表",
                      path: '/order/admin/list',
                      children: []
                    },
                    {
                      id: 307,
                      authName: "退款日志",
                      path: '/order/admin/refund',
                      children: []
                    }
                  ]
                },
              ]
            },
            {
              id: 104,
              authName: "营销",
              path: null,
              children: [
                {
                  id: 207,
                  authName: "营销首页",
                  path: '/marketing/index',
                  children: []
                },
                {
                  id: 208,
                  authName: "营销中心",
                  path: null,
                  children: [
                    {
                      id: 308,
                      authName: "商品折扣",
                      path: '/marketing/marketing/discount',
                      children: []
                    },
                    {
                      id: 309,
                      authName: "订单促销",
                      path: '/marketing/marketing/promotion',
                      children: []
                    }
                  ]
                },
                {
                  id: 209,
                  authName: "优惠券",
                  path: null,
                  children: [
                    {
                      id: 310,
                      authName: "优惠券",
                      path: '/marketing/coupon/list',
                      children: []
                    },
                    {
                      id: 311,
                      authName: "优惠券发放",
                      path: '/marketing/coupon/give',
                      children: []
                    }
                  ]
                },
                {
                  id: 210,
                  authName: "购物卡",
                  path: null,
                  children: [
                    {
                      id: 312,
                      authName: "购物卡",
                      path: '/marketing/card/list',
                      children: []
                    },
                    {
                      id: 313,
                      authName: "购物卡使用",
                      path: '/marketing/card/use',
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: 105,
              authName: "会员",
              path: null,
              children: [
                {
                  id: 211,
                  authName: "会员首页",
                  path: '/member/index',
                  children: []
                },
                {
                  id: 212,
                  authName: "账号管理",
                  path: null,
                  children: [
                    {
                      id: 314,
                      authName: "会员账号",
                      path: '/member/user/client',
                      children: []
                    },
                    {
                      id: 315,
                      authName: "账号等级",
                      path: '/member/user/level',
                      children: []
                    }
                  ]
                },
                {
                  id: 213,
                  authName: "提现审批",
                  path: null,
                  children: [
                    {
                      id: 316,
                      authName: "提现列表",
                      path: '/member/withdraw/list',
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: 106,
              authName: "财务",
              path: null,
              children: [
                {
                  id: 214,
                  authName: "财务首页",
                  path: null,
                  children: []
                },
                {
                  id: 215,
                  authName: "快捷向导",
                  path: null,
                  children: [
                    {
                      id: 317,
                      authName: "交易结算",
                      path: null,
                      children: []
                    },
                    {
                      id: 318,
                      authName: "支付日志",
                      path: null,
                      children: []
                    },
                    {
                      id: 319,
                      authName: "提现申请",
                      path: null,
                      children: []
                    },
                    {
                      id: 320,
                      authName: "退款日志",
                      path: null,
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: 107,
              authName: "数据",
              path: null,
              children: [
                {
                  id: 216,
                  authName: "数据首页",
                  path: '/stats/index',
                  children: []
                },
                {
                  id: 217,
                  authName: "统计数据",
                  path: null,
                  children: [
                    {
                      id: 321,
                      authName: "店铺统计",
                      path: '/stats/data/shop',
                      children: []
                    },
                    {
                      id: 322,
                      authName: "商品统计",
                      path: '/stats/data/goods',
                      children: []
                    },
                    {
                      id: 323,
                      authName: "订单统计",
                      path: '/stats/data/order',
                      children: []
                    },
                    {
                      id: 324,
                      authName: "会员统计",
                      path: '/stats/data/client',
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: 108,
              authName: "店铺",
              path: null,
              children: [
                {
                  id: 218,
                  authName: "系统首页",
                  path: '/system/index',
                  children: []
                },
                {
                  id: 219,
                  authName: "消息管理",
                  path: null,
                  children: [
                    {
                      id: 325,
                      authName: "我的消息",
                      path: '/system/message/user',
                      children: []
                    },
                    {
                      id: 326,
                      authName: "发布消息",
                      path: '/system/message/send',
                      children: []
                    }
                  ]
                },
                {
                  id: 220,
                  authName: "广告发布",
                  path: null,
                  children: [
                    {
                      id: 327,
                      authName: "广告位置",
                      path: '/system/ads/position',
                      children: []
                    },
                    {
                      id: 328,
                      authName: "广告列表",
                      path: '/system/ads/ads',
                      children: []
                    }
                  ]
                },
                {
                  id: 221,
                  authName: "文章发布",
                  path: null,
                  children: [
                    {
                      id: 329,
                      authName: "新增文章",
                      path: '/system/article/create',
                      children: []
                    },
                    {
                      id: 330,
                      authName: "文章管理",
                      path: '/system/article/admin',
                      children: []
                    }
                  ]
                },
                {
                  id: 222,
                  authName: "专题发布",
                  path: null,
                  children: [
                    {
                      id: 331,
                      authName: "新增专题",
                      path: null,
                      children: []
                    },
                    {
                      id: 332,
                      authName: "专题管理",
                      path: null,
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: 109,
              authName: "设置",
              path: null,
              children: [
                {
                  id: 223,
                  authName: "设置首页",
                  path: '/setting/index',
                  children: []
                },
                {
                  id: 224,
                  authName: "权限分配",
                  path: null,
                  children: [
                    {
                      id: 333,
                      authName: "用户组",
                      path: '/setting/auth/group',
                      children: []
                    },
                    {
                      id: 334,
                      authName: "权限规则",
                      path: '/setting/auth/rule',
                      children: []
                    }
                  ]
                },
                {
                  id: 225,
                  authName: "支付系统",
                  path: null,
                  children: [
                    {
                      id: 335,
                      authName: "支付配置",
                      path: '/setting/payallocation',
                      children: []
                    },
                    {
                      id: 336,
                      authName: "支付日志",
                      path: '/setting/paylog',
                      children: []
                    }
                  ]
                },
                {
                  id: 226,
                  authName: "应用管理",
                  path: null,
                  children: [
                    {
                      id: 337,
                      authName: "APP管理",
                      path: '/setting/Appmanage',
                      children: []
                    },
                    {
                      id: 338,
                      authName: "商业授权",
                      path: '/setting/bussinessauthorize',
                      children: []
                    }
                  ]
                }
              ]
            }
          ],
          meta: {
            msg: "获取菜单列表成功",
            status: 200
          }
        }
      }
  }
}

module.exports = MenuController;
