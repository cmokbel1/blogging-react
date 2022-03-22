const { Schema, model } = require('mongoose')

const User = new Schema({
  username: String,
  email: String,
  isAdmin: Boolean,
  blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'blog'
    }],
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'note'
    }
  ]
}, { timestamps: true })
User.plugin(require('passport-local-mongoose'));

module.exports = model('user', User) 
