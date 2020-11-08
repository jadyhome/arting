const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const ArtBoardRouter = require('./ArtBoardRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/user', UserRouter)
Router.use('/artboard', ArtBoardRouter)
Router.use('/comment', CommentRouter)

module.exports = Router