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
        ]
      }
    ]
    return list
  }
}

module.exports = ClassifyService;
