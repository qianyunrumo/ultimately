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
            authName: '录音机',
            children:[]
          },
          {
            id: 221,
            authName: '饮水机',
            children:[]
          },
          {
            id: 231,
            authName: '烫衣机',
            children:[]
          },
          {
            id: 241,
            authName: '电风扇',
            children:[]
          },
          {
            id: 251,
            authName: '电话机',
            children:[]
          },
        ]
      }
    ]
    return list
  }
}

module.exports = ClassifyService;
