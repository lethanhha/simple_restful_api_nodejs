const express = require('express')
const morgan = require('morgan')

const app = express()
const movieRouter = require('./routes/movieRoutes')

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Main Routes
app.use('/api/v1/movies', movieRouter)

app.all('*', (request, response, next) => {
  response.status(404).json({
    status: 'fail',
    message: `Can't ind ${request.originalUrl} on this server!`
  })
})
// Export
module.exports = app
