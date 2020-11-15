const Router = require('express').Router()
const ArtBoardController = require('../controllers/ArtBoardController')

Router.get('/', ArtBoardController.GetBoards)
Router.get('/:board_id', ArtBoardController.GetBoardById)
Router.post('/:user_id', ArtBoardController.CreateBoard)
Router.put('/:board_id', ArtBoardController.UpdateBoard)
Router.delete('/:board_id', ArtBoardController.DeleteBoard)

module.exports = Router