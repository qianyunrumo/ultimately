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
            id: 361,
            authName: '电脑整机',
            children:[
              {
                id: 362,
                authName: '平板电脑',
                children:[]
              },
              {
                id: 363,
                authName: '台式机',
                children:[]
              },
              {
                id: 364,
                authName: '一体机',
                children:[]
              },
              {
                id: 365,
                authName: '笔记本',
                children:[]
              },
              {
                id: 366,
                authName: '超极本',
                children:[]
              },
            ]
          },
          {
            id: 371,
            authName: '电脑配件',
            children:[
              {
                id: 372,
                authName: '内存',
                children:[]
              },
              {
                id: 373,
                authName: '组装电脑',
                children:[]
              },
              {
                id: 374,
                authName: '机箱',
                children:[]
              },
              {
                id: 375,
                authName: '电源',
                children:[]
              },
              {
                id: 376,
                authName: 'CPU',
                children:[]
              },
              {
                id: 377,
                authName: '显示器',
                children:[]
              },
              {
                id: 378,
                authName: '主板',
                children:[]
              },
              {
                id: 379,
                authName: '刻录机/光驱',
                children:[]
              },
              {
                id: 380,
                authName: '显卡',
                children:[]
              },
              {
                id: 381,
                authName: '声卡/扩展卡',
                children:[]
              },
              {
                id: 382,
                authName: '硬盘',
                children:[]
              },
              {
                id: 383,
                authName: '散热器',
                children:[]
              },
              {
                id: 384,
                authName: '固态硬盘',
                children:[]
              },
              {
                id: 385,
                authName: '装机配件',
                children:[]
              },
            ]
          },
          {
            id: 391,
            authName: '外设产品',
            children:[
              {
                id: 392,
                authName: '线缆',
                children:[]
              },
              {
                id: 393,
                authName: '鼠标',
                children:[]
              },
              {
                id: 394,
                authName: '手写板',
                children:[]
              },
              {
                id: 395,
                authName: '键盘',
                children:[]
              },
              {
                id: 396,
                authName: '电脑工具',
                children:[]
              },
              {
                id: 397,
                authName: '网络仪表仪器',
                children:[]
              },
              {
                id: 398,
                authName: 'UPS',
                children:[]
              },
              {
                id: 399,
                authName: 'U盘',
                children:[]
              },
              {
                id: 400,
                authName: '插座',
                children:[]
              },
              {
                id: 401,
                authName: '移动硬盘',
                children:[]
              },
              {
                id: 402,
                authName: '鼠标垫',
                children:[]
              },
              {
                id: 403 ,
                authName: '摄像头',
                children:[]
              },
            ]
          },
          {
            id: 411,
            authName: '游戏设备',
            children:[
              {
                id: 412,
                authName: '游戏软件',
                children:[]
              },
              {
                id: 413,
                authName: '游戏周边',
                children:[]
              },
              {
                id: 414,
                authName: '游戏机',
                children:[]
              },
              {
                id: 415,
                authName: '游戏耳机',
                children:[]
              },
              {
                id: 416,
                authName: '手柄方向盘',
                children:[]
              },
            ]
          },
        ]
      },
      {
        id: 501,
        authName: '家居、家具、家装、 厨具',
        children:[
          {
            id: 511,
            authName: '生活用品',
            children:[
              {
                id: 512,
                authName: '清洁工具',
                children:[]
              },
              {
                id: 513,
                authName: '收纳用品',
                children:[]
              },
              {
                id: 514,
                authName: '雨伞雨具',
                children:[]
              },
              {
                id: 515,
                authName: '浴室用品',
                children:[]
              },
              {
                id: 516,
                authName: '缝纫/针织用品',
                children:[]
              },
              {
                id: 517,
                authName: '洗晒/熨烫',
                children:[]
              },
              {
                id: 518,
                authName: '净化除味',
                children:[]
              },
            ]
          },
          {
            id: 521,
            authName: '家装软饰',
            children:[
              {
                id: 522,
                authName: '节庆饰品',
                children:[]
              },
              {
                id: 523,
                authName: '手工/十字绣',
                children:[]
              },
              {
                id: 524,
                authName: '桌布/罩件',
                children:[]
              },
              {
                id: 525,
                authName: '钟饰',
                children:[]
              },
              {
                id: 526,
                authName: '地毯地垫',
                children:[]
              },
              {
                id: 527,
                authName: '装饰摆件',
                children:[]
              },
              {
                id: 528,
                authName: '沙发套件/椅垫',
                children:[]
              },
              {
                id: 529,
                authName: '花瓶花艺',
                children:[]
              },
              {
                id: 530,
                authName: '帘艺隔断',
                children:[]
              },
              {
                id: 531,
                authName: '创意家居',
                children:[]
              },
              {
                id: 532,
                authName: '相框/照片墙',
                children:[]
              },
              {
                id: 533,
                authName: '保暖防护',
                children:[]
              },
              {
                id: 534,
                authName: '装饰字画',
                children:[]
              },
              {
                id: 535,
                authName: '香薰蜡烛',
                children:[]
              },
              {
                id: 536,
                authName: '墙贴/装饰贴',
                children:[]
              },
            ]
          },
          {
            id: 541,
            authName: '宠物生活',
            children:[
              {
                id: 542,
                authName: '水族用品',
                children:[]
              },
              {
                id: 543,
                authName: '宠物玩具',
                children:[]
              },
              {
                id: 544,
                authName: '宠物主粮',
                children:[]
              },
              {
                id: 545,
                authName: '宠物牵引',
                children:[]
              },
              {
                id: 546,
                authName: '宠物零食',
                children:[]
              },
              {
                id: 547,
                authName: '宠物驱虫',
                children:[]
              },
              {
                id: 548,
                authName: '猫砂/尿布',
                children:[]
              },
              {
                id: 549,
                authName: '洗护美容',
                children:[]
              },
              {
                id: 550,
                authName: '家居日用',
                children:[]
              },
              {
                id: 551,
                authName: '医疗保健',
                children:[]
              },
              {
                id: 552,
                authName: '出行装备',
                children:[]
              },
            ]
          },
          {
            id: 561,
            authName: '厨具',
            children:[
              {
                id: 562,
                authName: '剪刀菜饭',
                children:[]
              },
              {
                id: 563,
                authName: '厨房配件',
                children:[]
              },
              {
                id: 564,
                authName: '水具酒具',
                children:[]
              },
              {
                id: 565,
                authName: '餐具',
                children:[]
              },
              {
                id: 566,
                authName: '茶具/咖啡具',
                children:[]
              },
              {
                id: 567,
                authName: '烹饪锅具',
                children:[]
              },
            ]
          },
          {
            id: 571,
            authName: '家装建材',
            children:[
              {
                id: 572,
                authName: '电工电料',
                children:[]
              },
              {
                id: 573,
                authName: '墙地材料',
                children:[]
              },
              {
                id: 574,
                authName: '装饰材料',
                children:[]
              },
              {
                id: 575,
                authName: '装修服务',
                children:[]
              },
              {
                id: 576,
                authName: '淋浴花洒',
                children:[]
              },
              {
                id: 577,
                authName: '灯饰照明',
                children:[]
              },
              {
                id: 578,
                authName: '开关插座',
                children:[]
              },
              {
                id: 579,
                authName: '厨房卫浴',
                children:[]
              },
              {
                id: 580,
                authName: '油漆涂料',
                children:[]
              },
              {
                id: 581,
                authName: '五金工具',
                children:[]
              },
              {
                id: 582,
                authName: '龙头',
                children:[]
              },
            ]
          },
          {
            id: 590,
            authName: '家纺',
            children:[
              {
                id: 591,
                authName: '床品套件',
                children:[]
              },
              {
                id: 592,
                authName: '抱枕靠垫',
                children:[]
              },
              {
                id: 593,
                authName: '被子',
                children:[]
              },
              {
                id: 594,
                authName: '布艺软饰',
                children:[]
              },
              {
                id: 595,
                authName: '被芯',
                children:[]
              },
              {
                id: 596,
                authName: '窗帘窗纱',
                children:[]
              },
              {
                id: 597,
                authName: '床单被罩',
                children:[]
              },
              {
                id: 598,
                authName: '蚊帐',
                children:[]
              },
              {
                id: 599,
                authName: '床垫床褥',
                children:[]
              },
              {
                id: 600,
                authName: '凉席',
                children:[]
              },
              {
                id: 601,
                authName: '电热毯',
                children:[]
              },
              {
                id: 602,
                authName: '毯子',
                children:[]
              },
              {
                id: 603,
                authName: '毛巾浴巾',
                children:[]
              },
            ]
          },
          {
            id: 610,
            authName: '家具',
            children:[
              {
                id: 611,
                authName: '餐厅家具',
                children:[]
              },
              {
                id: 612,
                authName: '电脑椅',
                children:[]
              },
              {
                id: 613,
                authName: '书房家具',
                children:[]
              },
              {
                id: 614,
                authName: '衣柜',
                children:[]
              },
              {
                id: 615,
                authName: '储物家具',
                children:[]
              },
              {
                id: 616,
                authName: '茶几',
                children:[]
              },
              {
                id: 617,
                authName: '阳台/户外',
                children:[]
              },
              {
                id: 618,
                authName: '电视柜',
                children:[]
              },
              {
                id: 619,
                authName: '商业办公',
                children:[]
              },
              {
                id: 620,
                authName: '餐桌',
                children:[]
              },
              {
                id: 621,
                authName: '卧室家具',
                children:[]
              },
              {
                id: 622,
                authName: '床',
                children:[]
              },
              {
                id: 623,
                authName: '电脑桌',
                children:[]
              },
              {
                id: 624,
                authName: '客厅家具',
                children:[]
              },
              {
                id: 625,
                authName: '床垫',
                children:[]
              },
              {
                id: 626,
                authName: '鞋架/衣帽架',
                children:[]
              },
              {
                id: 627,
                authName: '客厅家具',
                children:[]
              },
              {
                id: 628,
                authName: '沙发',
                children:[]
              },
            ]
          },
          {
            id: 630,
            authName: '灯具',
            children:[
              {
                id: 631,
                authName: '吸顶灯',
                children:[]
              },
              {
                id: 632,
                authName: '吊灯',
                children:[]
              },
              {
                id: 633,
                authName: '简灯射灯',
                children:[]
              },
              {
                id: 634,
                authName: '氛围照明',
                children:[]
              },
              {
                id: 635,
                authName: 'LED灯',
                children:[]
              },
              {
                id: 636,
                authName: '节能灯',
                children:[]
              },
              {
                id: 637,
                authName: '落地灯',
                children:[]
              },
              {
                id: 638,
                authName: '五金电器',
                children:[]
              },
              {
                id: 639,
                authName: '应急灯/手电',
                children:[]
              },
              {
                id: 640,
                authName: '台灯',
                children:[]
              },
              {
                id: 641,
                authName: '装饰灯',
                children:[]
              },
            ]
          },
        ]
      },
      {
        id: 700,
        authName: '男装、女装',
        children:[
          {
            id: 710,
            authName: '女装',
            children:[
              {
                id: 711,
                authName: '外套',
                children:[]
              },
              {
                id: 712,
                authName: '羊毛衫',
                children:[]
              },
              {
                id: 713,
                authName: '风衣',
                children:[]
              },
              {
                id: 714,
                authName: '马甲',
                children:[]
              },
              {
                id: 715,
                authName: '卫衣',
                children:[]
              },
              {
                id: 716,
                authName: '吊带/背心',
                children:[]
              },
              {
                id: 717,
                authName: '羽绒服',
                children:[]
              },
              {
                id: 718,
                authName: 'T桖',
                children:[]
              },
              {
                id: 719,
                authName: '连衣裙',
                children:[]
              },
              {
                id: 720,
                authName: '旗袍',
                children:[]
              },
              {
                id: 720,
                authName: '长裙',
                children:[]
              },
            ]
          },
          {
            id: 730,
            authName: '男装',
            children:[
              {
                id: 731,
                authName: '外套',
                children:[]
              },
              {
                id: 732,
                authName: '羊毛衫',
                children:[]
              },
              {
                id: 733,
                authName: '风衣',
                children:[]
              },
              {
                id: 734,
                authName: '马甲',
                children:[]
              },
              {
                id: 735,
                authName: '卫衣',
                children:[]
              },
              {
                id: 736,
                authName: '休闲裤',
                children:[]
              },
              {
                id: 737,
                authName: '夹克',
                children:[]
              },
              {
                id: 738,
                authName: '牛仔裤',
                children:[]
              },
              {
                id: 739,
                authName: '西裤',
                children:[]
              },
              {
                id: 740,
                authName: '羽绒服',
                children:[]
              },
              {
                id: 741,
                authName: '皮鞋',
                children:[]
              },
              {
                id: 742,
                authName: '棉服',
                children:[]
              },
            ]
          }
        ]
      },
      {
        id: 800,
        authName: '个人化妆',
        children:[
          {
            id: 810,
            authName: '身体护肤',
            children:[
              {
                id: 811,
                authName: '沐浴',
                children:[]
              },
              {
                id: 812,
                authName: '润肤',
                children:[]
              },
              {
                id: 813,
                authName: '颈部',
                children:[]
              },
              {
                id: 814,
                authName: '手足',
                children:[]
              },
              {
                id: 815,
                authName: '纤体塑形',
                children:[]
              },
              {
                id: 816,
                authName: '美胸',
                children:[]
              },
              {
                id: 817,
                authName: '套装',
                children:[]
              },
            ]
          },
          {
            id: 820,
            authName: '口腔护理',
            children:[
              {
                id: 821,
                authName: '牙膏/牙粉',
                children:[]
              },
              {
                id: 822,
                authName: '牙刷/牙线',
                children:[]
              },
              {
                id: 823,
                authName: '漱口水',
                children:[]
              },
              {
                id: 824,
                authName: '套装',
                children:[]
              },
            ]
          },
        ]
      },
    ]
    return list
  }
}

module.exports = ClassifyService;
