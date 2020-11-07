const { Schema, model } = require('mongoose')

const User = new Schema(
  {
    name: {
      type: String, 
      required: true 
    },
    user_name: {
      type: String,
      required: true
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      index: true 
    },
    password_digest: { 
      type: String, 
      required: true 
    },
    art_board: {
      type: Schema.Types.ObjectId,
      ref: 'artboards'
    }
  },
  { timestamps: true }
)

module.exports = model('users', User)