const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

mongoose.connect('mongodb://guvenlik-raporlama-app:grs-135-119@172.26.0.179:27017/guvenlik-raporlama')

const timeIntervalSchema = new Schema({
  _id: ObjectId,
  text: String
})

const timeIntervalModel = mongoose.model('TimeInterval', timeIntervalSchema, 'timeintervals')

module.exports = timeIntervalModel
