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
        type:Number,
        required:true
    },
    status:{//上架状态,true为"出售中",false为"已下架"
        type:Boolean,
        required:true
    },
    price:{//价格
        type:Number,
        required:true
    },
    postage:{//包邮
        type:Boolean,
        required:true
    },
    pic:{//商品图片
        type:Array
    }
  })
  return mongoose.model('Goods',GoodsSchema)
}