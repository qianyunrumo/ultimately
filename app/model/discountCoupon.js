module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const DiscountCouponnSchema = new Schema({
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        name: { //名称
            type: String,
            required: true
        },
        type: { //类型
            type: String,
            required: true
        },
        Issued_quantity: { //发放数量
            type: Number,
            required: true
        },
        Preferential_amount: { //优惠金额
            type: Number,
            required: true
        },
        Use_threshold: { //使用门槛
            type: String,
            required: true
        },
        state: { //状态
            type: Boolean,
            required: true
        },
        valid: { //是否有效
            type: Boolean,
            required: true
        }

    })
    return mongoose.model('DiscountCouponn', DiscountCouponnSchema)
}