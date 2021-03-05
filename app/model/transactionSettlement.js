module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const transactionSettlementSchema = new Schema({
        pagenum: { //当前页码
            type: Number,
            required: true
        },
        pagesize: { //每页显示条数
            type: Number,
            required: true
        },
        Source_order: { //来源订单
            type: String,
            required: true
        },
        Trading_account: { //交易账号
            type: String,
            required: true
        },
        Amount_of_revenue_and_expenditure: { //收支金额
            type: Number,
            required: true
        },
        Remaining_amount: { //剩余金额
            type: Number,
            required: true
        },
        Source_transaction: { //交易来源
            type: String,
            required: true
        },
        model: { //收支模型
            type: String,
            required: true
        },
        Transaction_notes: { //交易备注
            type: String,
            required: true
        },
        Operator: { //操作人
            type: String,
            required: true
        },
        Creation_date: { //创建日期
            type: String,
            required: true
        }

    })
    return mongoose.model('TransactionSettlement', transactionSettlementSchema)
}