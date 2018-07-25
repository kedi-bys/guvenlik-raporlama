const mongoose = require('mongoose')
const config = require('./../config')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

mongoose.connect(config.connectionString)

const userSchema = new Schema({
  _id: ObjectId,
  displayname: String,
  username: String,
  mail: String,
  group: String,
  role: { name: String, privilege: Number },
  firstlogin: Date,
  lastlogin: Date,
  prevlogin: Date
})

const userModel = mongoose.model('Users', userSchema, 'users')

module.exports = userModel
