const ArtBoard = require('../models/ArtBoard')

const GetBoards = async (request, response) => {
  try {
    const { page, limit } = request.query
    const offset = page === 1 ? 0 : Mathfloor(parseInt(page) * parseInt(limit))
    const boards = await ArtBoard.find()
      .limit(parseInt(limit))
      .skip(offset)
    response.send({ getting: boards.length, boards })
  } catch (error) {
    throw error
  }
}

const CreateBoard = async (request, response) => {
  try {
    const newBoards = new ArtBoard({ ...request.body, user_name: request.params.user_name })
    newBoards.save()
    response.send(newBoards)
  } catch (error) {
    throw error
  }
}

const UpdateBoard = async (request, response) => {
  try {
    const updateBoard = await ArtBoard.findOneAndUpdate(
        request.params.board_name,
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
    await ArtBoard.findOneAndDelete(request.params.board_name)
    response.send({ Confirmation: 'Board has been deleted.' })
  } catch (error) {
    throw error
  }
}

module.exports = {
    GetBoards,
    CreateBoard,
    UpdateBoard,
    DeleteBoard
}