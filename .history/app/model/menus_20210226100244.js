//列表菜单所有数据
module.exports = app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema
  const MenusSchema = new Schema({
    menus: {
      type: Array,
    }
    //email mobile gender address city......
  })
  return mongoose.model('Menus', MenusSchema)
}