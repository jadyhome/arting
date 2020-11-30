const ArtBoard = require('../models/ArtBoard')

const GetBoards = async (request, response) => {
  try {
    const boards = await ArtBoard.find()
    response.send(boards)
  } catch (error) {
    throw error
  }
}

const GetBoardById = async (request, response) => {
  try {
    const board = await ArtBoard.findById(request.params.board_id).populate([
      {
        model: 'users',
        path: 'user_id',
        select: '_id name'
      },
      {
        path: 'comments',
        populate: {
          model: 'users',
          path: 'user_id',
          select: '_id name'
        }
      }
    ])
    response.send(board)
  } catch (error) {
    throw error
  }
}

const CreateBoard = async (request, response) => {
  try {
    const newBoard = new ArtBoard({
      ...request.body,
      user_id: request.params.user_id
    })
    newBoard.save()
    response.send(newBoard)
  } catch (error) {
    throw error
  }
}

const UpdateBoard = async (request, response) => {
  try {
    const updateBoard = await ArtBoard.findByIdAndUpdate(
      request.params.board_id,
      { ...request.body },
      { new: true, useFindAndModify: false }
    )
    response.send(updateBoard)
  } catch (error) {
    throw error
  }
}

const DeleteBoard = async (request, response) => {
  try {
    await ArtBoard.findByIdAndDelete(request.params.board_id)
    response.send({ Confirmation: 'Board has been deleted.' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBoards,
  GetBoardById,
  CreateBoard,
  UpdateBoard,
  DeleteBoard
}