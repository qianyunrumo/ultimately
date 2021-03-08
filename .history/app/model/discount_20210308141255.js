//商品折扣的所有信息
module.exports=app=>{
  let mongoose=app.mongoose
  let Schema=mongoose.Schema
  const DiscountSchema = new Schema({
    disName:{//折扣名称
      type:String
    },
    start_time:{//开始时间
      type:String
    },
    end_time:{//结束时间
      type:String
    },
    discount_way:{//折扣方式
      type:String
    },
    dis_status:{//折扣状态
      type:Boolean
    },
    dis_goods:{//折扣商品
      type:String
    }
  })
  return mongoose.model('Discount',DiscountSchema)
}