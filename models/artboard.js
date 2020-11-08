const { Schema, model } = require('mongoose')

const ArtBoard = new Schema(
  {
    user_name: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    board_name: {
      type: String,
      required: true
    },
    image_url: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0,
      required: true
    },
    views: {
      type: Number,
      default: 0,
      required: true
    },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'comments'
    }]
  },
  { timestamps: true }
)

module.exports = model('artboards', ArtBoard)