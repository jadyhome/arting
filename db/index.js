const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/artBoardDatabase', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch(error => {
    console.error('Connection error', error.message)
  })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db