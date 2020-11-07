const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db/index')

const PORT = process.env.PORT || 3001
const app = express()

// MIDDLEWARE
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// MIDDLEWARE

app.use('/', (request, response) => {
  response.send('This is Home Route.')
})

app.list(PORT, async () => {
  try {
    await connection
    console.log('Database Connected')
    console.log(`App listening on PORT ${PORT}.`)
  } catch (error) {
    throw new Error('Connection Error.')
  }
})