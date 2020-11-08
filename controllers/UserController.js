const User = require('../models/User')
const Artboard = require('../models/ArtBoard')

const UserSignUp = async (request, response) => {
  try {
    const body = request.body
    const user = new User({
        name: body.name,
        user_name: body.user_name,
        email: body.email,
        password_digest: body.password_digest
    })
    user.save()
    response.send(user)
  } catch (error) {
    throw error
  }
}

const UserSignIn = async (request, response) => {
  try {
    const user = await User.findOne({ user_name: request.body.user_name })
    if (user && user.password_digest === request.body.password_digest) {
      const payload = {
        name: user.name,
        user_name: user.user_name
      }
      response.send(payload)
    }
    response.status(401).send({ Error: "Unauthorized" })
  } catch (error) {
    throw error
  }
}

const GetPortfolio = async (request, response) => {
  try {
    const user = await User.findById(request.params.user_name).select('_id name')
    const board = await Artboard.find({ 
      user_name: request.params.user_name 
    })
    response.send({ user, board })
  } catch (error) {
    throw error
  }
}


module.exports = {
    UserSignUp,
    UserSignIn,
    GetPortfolio
}