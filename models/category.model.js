const mongoose = require('mongoose')
const config = require('./../config')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

mongoose.connect(config.connectionString)

const categorySchema = new Schema({
  _id: ObjectId,
  name: String,
  locations: [ { name: String } ],
  occupationalGroups: [ { name: String } ],
  incorrectOperations: [ { name: String, details: [ { name: String } ] } ]
})

const categoryModel = mongoose.model('ReportCategory', categorySchema, 'categories')

module.exports = categoryModel
