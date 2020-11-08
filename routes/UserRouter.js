const Router = require('express').Router()
const UserController = require('../controllers/UserController')

Router.post('/signup', UserController.UserSignUp)
Router.post('/signin', UserController.UserSignIn)
Router.get('/:user_name', UserController.GetPortfolio)

module.exports = Router