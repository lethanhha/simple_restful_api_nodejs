const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'unnamed'
  },
  stars: [String],
  releasedDate: String,
  duration: Number,
  poster: String
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
