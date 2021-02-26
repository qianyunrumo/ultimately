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
    }
  })
  return mongoose.model('Goods',GoodsSchema)
}