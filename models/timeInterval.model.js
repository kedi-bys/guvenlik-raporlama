const mongoose = require('mongoose')
const config = require('./../config')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema
mongoose.connect(config.connectionString)

const timeIntervalSchema = new Schema({
  _id: ObjectId,
  text: String
})

const timeIntervalModel = mongoose.model('TimeInterval', timeIntervalSchema, 'timeIntervals')

module.exports = timeIntervalModel
