const { Schema, model } = require('mongoose')

const Note = new Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'blog'
  },
  username: String

}, { timestaps: true })

module.exports = model('note', Note) 