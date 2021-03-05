module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const couponIssuanceSchema = new Schema({
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        Exchange_code: { //兑换码
            type: String,
            required: true
        },
        valid: { //是否有效
            type: Boolean,
            required: true
        }

    })
    return mongoose.model('CouponIssuance', couponIssuanceSchema)
}