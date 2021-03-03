'use strict';

const Service = require('egg').Service;

class ClassifyService extends Service {
  async GetClassify() {
    let list = [
      {
        id: 101,
        authName: '手机 数码 通信',
        children:[
          {
            id: 111,
            authName: '手机配件',
            children:[
              {
                id: 112,
                authName: '电池 电源 充电器',
                children:[]
              },
              {
                id: 113,
                authName: '数据线,耳机',
                children:[]
              },
              {
                id: 114,
                authName: '贴膜,保护套',
                children:[]
              },
            ]
          },
          {
            id: 121,
            authName: '摄影摄像',
            children:[
              {
                id: 122,
                authName: '单反相机',
                children:[]
              },
              {
                id: 123,
                authName: '微单相机',
                children:[]
              },
              {
                id: 124,
                authName: '摄像机',
                children:[]
              },
              {
                id: 125,
                authName: '镜头',
                children:[]
              },
              {
                id: 126,
                authName: '数码相框',
                children:[]
              },
            ]
          },
          {
            id: 131,
            authName: '运营商',
            children:[
              {
                id: 132,
                authName: '选号码',
                children:[]
              },
              {
                id: 133,
                authName: '办套餐',
                children:[]
              },
              {
                id: 134,
                authName: '合约机',
                children:[]
              },
              {
                id: 135,
                authName: '中国移动',
                children:[]
              },
            ]
          },
          {
            id: 141,
            authName: '数码配件',
            children:[
              {
                id: 142,
                authName: '充值卡',
                children:[]
              },
              {
                id: 143,
                authName: '读卡器',
                children:[]
              },
              {
                id: 144,
                authName: '支架',
                children:[]
              },
              {
                id: 145,
                authName: '滤镜',
                children:[]
              },
            ]
          },
          {
            id: 151,
            authName: '娱乐影视',
            children:[
              {
                id: 152,
                authName: '音响麦克风',
                children:[]
              },
              {
                id: 153,
                authName: '耳机/耳麦',
                children:[]
              },
            ]
          },
          {
            id: 161,
            authName: '电子教育',
            children:[
              {
                id: 162,
                authName: '平板',
                children:[]
              },
              {
                id: 163,
                authName: '点读机',
                children:[]
              },
              {
                id: 164,
                authName: '电子书',
                children:[]
              },
              {
                id: 165,
                authName: '电子词典',
                children:[]
              },
              {
                id: 166,
                authName: '复读机',
                children:[]
              },
            ]
          },
          {
            id: 171,
            authName: '手机通讯',
            children:[
              {
                id: 172,
                authName: '对讲机',
                children:[]
              },
              {
                id: 173,
                authName: '手机',
                children:[]
              },
            ]
          },
        ]
      },
      {
        id: 201,
        authName: '家用电器',
        children:[
          {
            id: 211,
            authName: '生活电器',
            children:[
              {
                id: 212,
                authName: '录音机',
                children:[]
              },
              {
                id: 213,
                authName: '饮水机',
                children:[]
              },
              {
                id: 214,
                authName: '烫衣机',
                children:[]
              },
              {
                id: 215,
                authName: '电风扇',
                children:[]
              },
              {
                id: 216,
                authName: '饮水机',
                children:[]
              },
            ]
          },
          {
            id: 221,
            authName: '大家电',
            children:[
              {
                id: 222,
                authName: '电视',
                children:[]
              },
              {
                id: 223,
                authName: '冰箱',
                children:[]
              },
              {
                id: 224,
                authName: '空调',
                children:[]
              },
              {
                id: 225,
                authName: '洗衣机',
                children:[]
              },
              {
                id: 226,
                authName: '热水器',
                children:[]
              },
            ]
          },
          {
            id: 231,
            authName: '厨房电器',
            children:[
              {
                id: 232,
                authName: '料理/榨汁机',
                children:[]
              },
              {
                id: 233,
                authName: '电饭锅',
                children:[]
              },
              {
                id: 234,
                authName: '微波炉',
                children:[]
              },
              {
                id: 235,
                authName: '豆浆机',
                children:[]
              },
            ]
          },
          {
            id: 241,
            authName: '个户健康',
            children:[
              {
                id: 242,
                authName: '剃须刀',
                children:[]
              },
              {
                id: 243,
                authName: '吹风机',
                children:[]
              },
              {
                id: 244,
                authName: '按摩器',
                children:[]
              },
              {
                id: 245,
                authName: '足浴盆',
                children:[]
              },
              {
                id: 246,
                authName: '血压计',
                children:[]
              },
            ]
          },
          {
            id: 251,
            authName: '五金交电',
            children:[
              {
                id: 252,
                authName: '厨卫五金',
                children:[]
              },
              {
                id: 253,
                authName: '门铃门锁',
                children:[]
              },
              {
                id: 254,
                authName: '开关插座',
                children:[]
              },
              {
                id: 255,
                authName: '电动工具',
                children:[]
              },
              {
                id: 256,
                authName: '监控安防',
                children:[]
              },
              {
                id: 257,
                authName: '仪表仪器',
                children:[]
              },
              {
                id: 258,
                authName: '电线线缆',
                children:[]
              },
              {
                id: 259,
                authName: '浴霸/排气扇',
                children:[]
              },
              {
                id: 260,
                authName: '灯具',
                children:[]
              },
              {
                id: 261,
                authName: '水龙头',
                children:[]
              },
            ]
          },
        ]
      },
      {
        id: 301,
        authName: '电脑、办公',
        children:[
          {
            id: 311,
            authName: '网络产品',
            children:[
              {
                id: 312,
                authName: '网络配件',
                children:[]
              },
              {
                id: 313,
                authName: '路由器',
                children:[]
              },
              {
                id: 314,
                authName: '网卡',
                children:[]
              },
              {
                id: 315,
                authName: '交换机',
                children:[]
              },
              {
                id: 316,
                authName: '网络存储',
                children:[]
              },
              {
                id: 317,
                authName: '3G/4G/5G上网',
                children:[]
              },
              {
                id: 318,
                authName: '网络盒子',
                children:[]
              },
            ]
          },
          {
            id: 321,
            authName: '办公设备',
            children:[
              {
                id: 322,
                authName: '复合机',
                children:[]
              },
              {
                id: 323,
                authName: '办公工具',
                children:[]
              },
              {
                id: 324,
                authName: '摄影机',
                children:[]
              },
              {
                id: 325,
                authName: '碎纸机',
                children:[]
              },
              {
                id: 326,
                authName: '白板',
                children:[]
              },
              {
                id: 327,
                authName: '投影配件',
                children:[]
              },
              {
                id: 328,
                authName: '考勤机',
                children:[]
              },
              {
                id: 329,
                authName: '多功能一体机',
                children:[]
              },
              {
                id: 330,
                authName: '收款/POS机',
                children:[]
              },
              {
                id: 331,
                authName: '打印机',
                children:[]
              },
              {
                id: 332,
                authName: '会员视频音响',
                children:[]
              },
              {
                id: 333,
                authName: '传真设备',
                children:[]
              },
              {
                id: 334,
                authName: '保险柜',
                children:[]
              },
              {
                id: 335,
                authName: '点钞机/验钞机',
                children:[]
              },
              {
                id: 336,
                authName: '装订机/封装机',
                children:[]
              },
              {
                id: 337,
                authName: '扫描仪',
                children:[]
              },
              {
                id: 338,
                authName: '安防监控',
                children:[]
              },
            ]
          },
          {
            id: 341,
            authName: '文具消耗',
            children:[
              {
                id: 342,
                authName: '文具管理',
                children:[]
              },
              {
                id: 343,
                authName: '本册便签',
                children:[]
              },
              {
                id: 344,
                authName: '硒鼓/墨粉',
                children:[]
              },
              {
                id: 345,
                authName: '计算器',
                children:[]
              },
              {
                id: 346,
                authName: '墨盒',
                children:[]
              },
              {
                id: 347,
                authName: '笔',
                children:[]
              },
              {
                id: 348,
                authName: '色带',
                children:[]
              },
              {
                id: 349,
                authName: '画具',
                children:[]
              },
              {
                id: 350,
                authName: '纸类',
                children:[]
              },
              {
                id: 351,
                authName: '财会用品',
                children:[]
              },
              {
                id: 352,
                authName: '办公文具',
                children:[]
              },
              {
                id: 353,
                authName: '刻录碟片',
                children:[]
              },
              {
                id: 354,
                authName: '学生文具',
                children:[]
              },
            ]
          },
          {
            id: 360,
            authName: '网络产品',
            children:[]
          },
          {
            id: 351,
            authName: '网络产品',
            children:[]
          },
          {
            id: 361,
            authName: '网络产品',
            children:[]
          },
          {
            id: 371,
            authName: '网络产品',
            children:[]
          },
        ]
      }
    ]
    return list
  }
}

module.exports = ClassifyService;
