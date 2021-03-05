module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const shoppingCardUsageSchema = new Schema({
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        Card_number: { //卡号
            type: Number,
            required: true
        },
        Carmichael: { //卡密
            type: Number,
            required: true
        },
        Available_amount: { //可用金额
            type: Number,
            required: true
        },
        Activate: { //是否激活
            type: Boolean,
            required: true
        },
        Activate_account: { //激活账号
            type: String,
            required: true
        },
        Activate_date: { //激活日期
            type: String,
            required: true
        }

    })
    return mongoose.model('ShoppingCardUsage', shoppingCardUsageSchema)
}