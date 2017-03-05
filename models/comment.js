import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  id: Number,
  commentAuthor: String,
  creationDate: Date,
  content: String,
})

module.exports = mongoose.model('Comment', CommentSchema)
