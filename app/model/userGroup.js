module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const userGroupSchema = new Schema({
        name: { //名称
            type: String
        },
        describe: { //描述
            type: String
        },
        type: { //所属类型
            type: String
        },
        modular: { //模块
            type: String
        },
        Sort_value: { //排序值
            type: Number
        },
        state: { //状态
            type: String
        },
    })
    return mongoose.model('UserGroup', userGroupSchema)
}