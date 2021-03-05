module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const advertisingLocationSchema = new Schema({
        name: { //名称
            type: String,
            required: true
        },
        code: { //编码
            type: String,
            required: true
        },
        Display_mode: { //展示方式
            type: String,
            required: true
        },
        platform: { //平台
            type: String,
            required: true
        },
        type: { //类型
            type: String,
            required: true
        },
        width: { //宽度
            type: Number,
            required: true
        },
        height: { //高度
            type: Number,
            required: true
        },
        Background_color: { //背景色
            type: String,
            required: true
        },
        state: { //状态
            type: String,
            required: true
        },
        picture: { //图片
            type: String,
        },
        describe: { //描述
            type: String,
        }


    })
    return mongoose.model('AdvertisingLocation', advertisingLocationSchema)
}