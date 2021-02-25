//用户的所有信息
module.exports=app=>{
    let mongoose=app.mongoose
    let Schema=mongoose.Schema
    const UserSchema = new Schema({
        username:{
            type:String,
            // required:true,//是否必填
        },
        password:{
            type:String
        }
    })
    return mongoose.model('User',UserSchema)
}