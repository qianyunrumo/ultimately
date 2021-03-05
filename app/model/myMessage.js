module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const myMessageSchema = new Schema({
        title: { //标题
            type: String,
            required: true
        },
        type: { //类型
            type: String,
            required: true
        },
        date: { //日期
            type: String,
            required: true
        },

    })
    return mongoose.model('MyMessage', myMessageSchema)
}