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
            children:[]
          },
        ]
      },
      {

      }
    ]
    return list
  }
}

module.exports = ClassifyService;
