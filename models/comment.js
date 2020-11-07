const { Schema, model } = require('mongoose')

const Comment = new Schema(
  {
    user_name: {
      type: Schema.Types.String,
      ref: 'users'
    },
    comment: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

module.exports = model('comments', Comment)