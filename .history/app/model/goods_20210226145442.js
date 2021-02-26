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
    promotion:{//促销语
        type:String
    },
    brand:{//品牌
        type:String
    },
    unit:{//计量单位
        type:String
    },
    metering:{//商品个数(库存)
        type:Number
    },
    classify:{//分类
        type:String
    },
    classify:{//分类
        type:String
    },
    classify:{//分类
        type:String
    },
  })
  return mongoose.model('Goods',GoodsSchema)
}