module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const SubjectSchema = new Schema({
        title: { //标题
            type: String
        },
        nickname: { //别名
            type: String
        },
        Creation_date: { //创建日期
            type: String
        },
        state: { //状态
            type: String
        },
        key_word: { //关键词
            type: String
        },
        describe: { //描述
            type: String
        },
        content: { //内容
            type: String
        },
    })
    return mongoose.model('Subject', SubjectSchema)
}