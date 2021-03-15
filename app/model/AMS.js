module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const AMSSchema = new Schema({
        accredit: {
        type: Array,
      }
      //email mobile gender address city......
    })
    return mongoose.model('AMS', AMSSchema)
  }