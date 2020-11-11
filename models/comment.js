const { Schema, model } = require('mongoose')

const Comment = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
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