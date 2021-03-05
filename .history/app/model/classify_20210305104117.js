//商品分类的所有信息
module.exports=app=>{
  let mongoose=app.mongoose
  let Schema=mongoose.Schema
  const ClassifySchema = new Schema({
    authName:{//分类名称
      type:String,
    },
    superior:{//上级分类
      type:String
    },
    keyword:{//关键词
      type:String
    },
    main_class:{//一级分类名称
      type:String
    },
    secondary_class:{//二级分类
      type:Object
    },
    sub_class:{//二级分类名称
      type:String
    },
    _id:{//随机生成二级分类id
      type:String
    }
  })
  return mongoose.model('Classify',ClassifySchema)
}