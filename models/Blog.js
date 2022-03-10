const { Schema, model } = require('mongoose')

const Blog = new Schema({
  title: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: 'note'
  }
}, { timestamps: true })

module.exports = model('blog', Blog)