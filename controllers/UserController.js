const User = require('../models/User')
const Artboard = require('../models/ArtBoard')
const jwt = require('jsonwebtoken')
const { checkPassword, generatePassword } = require('../middleware/PasswordHandler')

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

const UserSignUp = async (request, response) => {
  try {
    const body = request.body
    const password_digest = await generatePassword(body.password)
    const user = new User({
        name: body.name,
        user_name: body.user_name,
        email: body.email,
        password_digest
    })
    user.save()
    response.send(user)
  } catch (error) {
    throw error
  }
}

const UserSignIn = async (request, response, next) => {
  try {
    const user = await User.findOne({ user_name: request.body.user_name })
    if (user && (await checkPassword(request.body.password, user.password_digest))) {
      const payload = {
        _id: user._id,
        name: user.name
      }
      response.locals.payload = payload
      return next()
    }
    response.status(401).send({ Error: "Unauthorized" })
  } catch (error) {
    throw error
  }
}

const RefreshSession = (request, response) => {
  try {
    const token = response.locals.token
    response.send({ user: jwt.decode(token), token: response.locals.token })
  } catch (error) {
    throw error
  }
}

module.exports = {
    GetProfile,
    UserSignUp,
    UserSignIn,
    RefreshSession
}