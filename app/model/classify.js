//商品分类的所有信息
module.exports=app=>{
  let mongoose=app.mongoose
  let Schema=mongoose.Schema
  const ClassifySchema = new Schema({
    authName:{//分类名称
      type:String,
      required:true//是否必填
    },
    id:{//分类id
      type:Number,
      required:true
    }
  })
  return mongoose.model('Classify',ClassifySchema)
}