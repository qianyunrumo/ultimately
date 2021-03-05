module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const RefundSchema = new Schema({
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        serial_number: { //序列号
            type: String,
            required: true
        },
        trading_account: { //交易账号
            type: String,
            required: true
        },
        sum_payable: { //付款金额
            type: Number,
            required: true
        },
        refund_amount: { //退款金额
            type: Number,
            required: true
        },
        way: { //方式
            type: String,
            required: true
        },
        state: { //状态
            type: String,
            required: true
        },
        date: { //日期
            type: String,
            required: true
        },
    })
    return mongoose.model('Refund', RefundSchema)
}