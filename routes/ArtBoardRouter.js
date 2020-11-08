const Router = require('express').Router()
const ArtBoardController = require('../controllers/ArtBoardController')

Router.get('/', ArtBoardController.GetBoards)
Router.post('/:user_name', ArtBoardController.CreateBoard)
Router.put('/:board_name', ArtBoardController.UpdateBoard)
Router.delete('/:board_name', ArtBoardController.DeleteBoard)

module.exports = Router