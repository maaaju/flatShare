import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FlatSchema = new Schema({
  //id: Number,
  flatName: String,
  flatUsers: Array,
})

module.exports = mongoose.model('Flat', FlatSchema)
