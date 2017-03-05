import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: Number,
  userName: String,
  mail: String,
  password: String, // Should this be here? Probably not.
  balance: Number,
  expenses: Array,
  settlements: Array,
})

module.exports = mongoose.model('User', UserSchema)
