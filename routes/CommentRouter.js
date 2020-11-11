const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.post('/:board_id/user/:user_id', CommentController.NewComment)
Router.delete('/:board_id/delete/:comment_id', CommentController.DeleteComment)

module.exports = Router