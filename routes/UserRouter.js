const Router = require('express').Router()
const UserController = require('../controllers/UserController')
const { getToken, createToken, verifyToken } = require('../middleware/JwtHandler')

Router.post('/signup', UserController.UserSignUp)
Router.post('/signin', UserController.UserSignIn, createToken)
Router.get('/:user_id', UserController.GetProfile)
Router.get('/refresh/session', getToken, verifyToken, UserController.RefreshSession)

module.exports = Router