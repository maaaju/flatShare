import mongoose from 'mongoose'

const Schema = mongoose.Schema

const SettlementSchema = new Schema({
  // id: Number,
  fromUser: String,
  toUser: String,
  amount: Number,
})

module.exports = mongoose.model('Settlement', SettlementSchema)
