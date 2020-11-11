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
    const user = await User.findOne({ email: request.body.email })
    if (user && user.password_digest === request.body.password) {
      const payload = {
        _id: user._id,
        name: user.name
      }
      response.send(payload)
    }
    response.status(401).send({ Error: "Unauthorized" })
  } catch (error) {
    throw error
  }
}

const GetProfile = async (request, response) => {
  try {
    const user = await User.findById(request.params.user_id).select('_id name')
    const board = await Artboard.find({ 
      user_id: request.params.user_id 
    })
    response.send({ user, board })
  } catch (error) {
    throw error
  }
}

module.exports = {
    UserSignUp,
    UserSignIn,
    GetProfile
}