module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const paymentLogSchema = new Schema({
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        order_number: { //支付流水号
            type: String,
            required: true
        },
        payment_way: { //支付方式
            type: String,
            required: true
        },
        payment_accounte: { //支付账号
            type: String,
            required: true
        },
        payment_moneye: { //支付金额
            type: Number,
            required: true
        },
        payment_date: { //支付日期
            type: String,
            required: true
        },
        payment_typee: { //支付类型
            type: String,
            required: true
        },
        state: { //状态
            type: Boolean,
            required: true
        },
        Creation_datee: { //创建日期
            type: String,
            required: true
        }

    })
    return mongoose.model('PaymentLog', paymentLogSchema)
}