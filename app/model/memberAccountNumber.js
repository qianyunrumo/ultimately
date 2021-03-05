module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const memberAccountNumberSchema = new Schema({
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        account_number: { //账号
            type: Number,
            required: true
        },
        nickname: { //昵称
            type: String,
            required: true
        },
        mobile: { //电话
            type: Number,
            required: true
        },
        Account_levelt: { //账号等级
            type: Number,
            required: true
        },
        User_group: { //用户组
            type: String,
            required: true
        },
        Gender: { //性别
            type: String,
            required: true
        },
        state: { //状态
            type: Boolean,
            required: true
        }

    })
    return mongoose.model('MemberAccountNumber', memberAccountNumberSchema)
}