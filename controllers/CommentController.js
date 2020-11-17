const ArtBoard = require('../models/ArtBoard')
const Comment = require('../models/Comment')

const NewComment = async (request, response) => {
  try {
    const newComment = await Comment({
      ...request.body,
      user_id: request.params.user_id
    })
    newComment.save()
    await ArtBoard.update(
      { _id: request.params.board_id },
      { $push: { comments: newComment } }
    )
    response.send(newComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (request, response) => {
  try {
    await Comment.deleteOne({ _id: request.params.comment_id })
    const updatedBoard = await ArtBoard.findByIdAndUpdate(
      request.params.board_id,
      { $pull: { comments: { _id: request.params.comment_id } } },
      { upsert: true, new: true }
    )
    response.send(updatedBoard)
  } catch (error) {
    throw error
  }
}

module.exports = {
  NewComment,
  DeleteComment
}