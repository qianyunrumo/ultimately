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
    },
    superior:{//上级分类
      type:String
    },
    otherName:{//分类别名
      type:String
    },
    first_authName:{//名称首拼
      type:String
    },
    first_otherName:{//别名首拼
      type:String
    }
  })
  return mongoose.model('Classify',ClassifySchema)
}