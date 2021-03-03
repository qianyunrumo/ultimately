//商品评价的所有信息
module.exports=app=>{
  let mongoose=app.mongoose
  let Schema=mongoose.Schema
  const EvaluateSchema = new Schema({
    name:{//商品名称
      type:String,
      required:true//是否必填
    },
    content:{//评价内容
      type:String
    },
    user:{//用户信息
      type:Object,
      required:true//是否必填
    },
  })
  return mongoose.model('Evaluate',EvaluateSchema)
}