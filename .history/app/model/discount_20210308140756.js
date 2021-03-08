//商品折扣的所有信息
module.exports=app=>{
  let mongoose=app.mongoose
  let Schema=mongoose.Schema
  const DiscountSchema = new Schema({
    disName:{//折扣名称
      type: String
    },
    start_time:{//开始时间
      type: String
    }
  })
  return mongoose.model('Discount',DiscountSchema)
}