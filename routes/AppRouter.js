const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const ArtBoardRouter = require('./ArtBoardRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/users', UserRouter)
Router.use('/artboards', ArtBoardRouter)
Router.use('/comments', CommentRouter)

module.exports = Router