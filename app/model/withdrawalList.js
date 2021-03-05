module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const withdrawalListlSchema = new Schema({
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        Reflect_order: { //提现单号
            type: String,
            required: true
        },
        Reflected_amount: { //提现金额
            type: Number,
            required: true
        },
        Service: { //手续费
            type: Number,
            required: true
        },
        Total: { //合计金额
            type: Number,
            required: true
        },
        state: { //状态
            type: Boolean,
            required: true
        },
        Creation_date: { //创建日期
            type: String,
            required: true
        }


    })
    return mongoose.model('WithdrawalList', withdrawalListlSchema)
}