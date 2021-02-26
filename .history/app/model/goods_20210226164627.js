//商品的所有信息
module.exports=app=>{
  let mongoose=app.mongoose
  let Schema=mongoose.Schema
  const GoodsSchema = new Schema({
    name:{//商品名称
        type:String,
        required:true//是否必填
    },
    classify:{//分类
        type:String,
        required:true
    },
    metering:{//商品个数(库存)
        type:Number
    },
    status:{//上架状态,true为"出售中",false为"已下架"
        type:Boolean
    },
    price:{//价格
        type:Number
    },
    postage:{//包邮
        type:Boolean
    },
    type:{//商品分类图标类型值为"list"或"tree"
        type:String
    },
  })
  return mongoose.model('Goods',GoodsSchema)
}