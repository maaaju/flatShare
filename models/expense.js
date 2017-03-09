import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
  // id: Number,
  userName: String,
  amount: Number,
  recurring: Boolean,
  noSplit: Boolean,
  recurringOn: Number,
  recurringPeriod: String,
})

module.exports = mongoose.model('Expense', ExpenseSchema)
