module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const releaseMessageSchema = new Schema({
        title: { //标题
            type: String,
            required: true
        },
        type: { //类型
            type: String,
            required: true
        },
        Member_group: { //成员组
            type: String,
            required: true
        },
        date: { //日期
            type: String,
            required: true
        },
        top: { //置顶
            type: String,
            //required: true
        },
        state: { //状态
            type: String,
            //required: true
        },
        content: { //内容
            type: String,
            //required: true
        }

    })
    return mongoose.model('ReleaseMessage', releaseMessageSchema)
}