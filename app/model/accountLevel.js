module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const accountLevelSchema = new Schema({
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
        Consumption_amount: { //消费金额
            type: Number,
            required: true
        },
        Discount: { //折扣
            type: Number,
            required: true
        },
        describe: { //描述
            type: String,
            required: true
        }


    })
    return mongoose.model('AccountLevel', accountLevelSchema)
}