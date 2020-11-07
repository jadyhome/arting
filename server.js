const connection = require('./db/index')

const PORT = process.env.PORT || 3001

// MIDDLEWARE

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