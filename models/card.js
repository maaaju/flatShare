const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CardSchema = new Schema({
  // id: Number,
  createdByUser: String,
  creationDate: Date,
  content: String,
})

module.exports = mongoose.model('Card', CardSchema)
