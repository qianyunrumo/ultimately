module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const articleManagementSchema = new Schema({
        title: { //标题
            type: String,
            required: true
        },
        type: { //类型
            type: String,
        },
        Views: { //浏览量
            type: Number,
        },
        Creation_date: { //创建日期
            type: String,
        },
        Top: { //置顶
            type: String,
        },
        state: { //状态
            type: String,
        },

        classification: { //分类
            type: String,
        },
        cover: { //封面
            type: String,
        },
        key_word: { //关键词
            type: String,
        },
        describe: { //描述
            type: String,
        },
        content: { //内容
            type: String,
        },
        source: { //文章来源
            type: String,
        },

        address: { //地址
            type: String,
        },
        External_links: { //外部链接
            type: String,
        },
        Opening_mode: { //打开方式
            type: String,
        },


    })
    return mongoose.model('ArticleManagement', articleManagementSchema)
}