const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.post('/:board_name/user/:user_name', CommentController.NewComment)
Router.delete('/:board_name/delete/:comment_id', CommentController.DeleteComment)

module.exports = Router