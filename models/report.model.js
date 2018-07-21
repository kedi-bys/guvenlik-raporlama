const mongoose = require('mongoose')
const config = require('./../config')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

mongoose.connect(config.connectionString)

const reportSchema = new Schema({
  _id: ObjectId,
  description: String,
  summary: String,
  solution: String,
  location: String,
  operation: String,
  operationdetail: String,
  category: String,
  timeinterval: Date,
  staff: String,
  date: Date,
  active: Boolean,
  status: String,
  creator: String,
  paraphedby: String,
  approvedby: String,
  rejectedby: String,
  createdat: Date,
  paraphedat: Date,
  approvedat: Date,
  rejectedat: Date
})

const reportModel = mongoose.model('Report', reportSchema, 'reports')

module.exports = reportModel
