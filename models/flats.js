import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FlatsSchema = new Schema({
  id: Number,
  flatname: String,
  flatUsers: Array,
})

module.exports = mongoose.model('Flat', FlatsSchema)
