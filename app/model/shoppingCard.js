module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const shoppingCardSchema = new Schema({
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
        Denomination: { //面额
            type: Number,
            required: true
        },
        Distribution_number: { //发放数
            type: Number,
            required: true
        },
        Activation_number: { //激活数
            type: Number,
            required: true
        },
        date: { //日期
            type: String,
            required: true
        },
        state: { //状态
            type: Boolean,
            required: true
        }

    })
    return mongoose.model('ShoppingCard', shoppingCardSchema)
}