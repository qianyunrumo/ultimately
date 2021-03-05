module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const ordersSchema = new Schema({
        query: { //查询内容
            type: String
        },
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        user_id: { //用户id
            type: Number
        },
        pay_status: { //支付状态
            type: Boolean,
            required: true
        },
        is_send: { //是否发货
            type: Boolean,
            required: true
        },
        order_fapiao_title: { //发票抬头
            type: String
        },
        order_fapiao_company: { //公司名称
            type: String
        },
        order_fapiao_contents: { //发票内容
            type: String
        },
        consignee_addr: { //发货地址
            type: String,
            required: true
        },
    })
    return mongoose.model('Orders', ordersSchema)
}