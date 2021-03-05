module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const advertisingListSchema = new Schema({
        name: { //名称
            type: String,
            required: true
        },
        Advertising_location: { //广告位置
            type: String,
            required: true
        },
        code: { //编码
            type: String,
            required: true
        },
        platform: { //平台
            type: String,
        },
        type: { //类型
            type: String,
        },
        Background_color: { //背景色
            type: String,
            required: true
        },
        Sort_value: { //排序值
            type: String,
            required: true
        },
        Launch_date: { //投放日期
            type: String,
            required: true
        },
        state: { //状态
            type: String,
            required: true
        },
        content: { //内容
            type: String,
        },
        end_date: { //结束日期
            type: String,
        },
        address: { //地址
            type: String,
        },
        Opening_mode: { //打开方式
            type: String,
        },


    })
    return mongoose.model('AdvertisingList', advertisingListSchema)
}