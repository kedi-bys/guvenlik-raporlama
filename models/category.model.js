const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

mongoose.connect('mongodb://guvenlik-raporlama-app:grs-135-119@172.26.0.179:27017/guvenlik-raporlama')

const categorySchema = new Schema({
  _id: ObjectId,
  name: String,
  locations: [ { name: String } ],
  occupationalGroups: [ { name: String } ],
  incorrectOperations: [ { name: String, details: [ { name: String } ] } ]
})

const categoryModel = mongoose.model('ReportCategory', categorySchema, 'categories')

module.exports = categoryModel
