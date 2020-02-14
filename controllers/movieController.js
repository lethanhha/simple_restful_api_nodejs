const Movie = require('./../models/movieModel')
const APIFeatures = require('./../utils/apiFeatures')

// ROUTE HANDLERS
exports.getAllMovies = async (request, response) => {
  try {
    // Query
    const features = new APIFeatures(Movie.find(), request.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()

    const movies = await features.query

    // Send response
    response.status(200).json({
      status: 'success',
      results: movies.length,
      data: { movies }
    })
  } catch (error) {
    response.status(404).json({
      status: 'fail',
      message: error
    })
  }
}

exports.getMovie = async (request, response) => {
  try {
    const movie = await Movie.findById(request.params.id)
    response.status(200).json({
      status: 'success',
      data: { movie }
    })
  } catch (error) {
    response.status(404).json({
      status: 'fail',
      message: error
    })
  }
}

exports.createMovie = async (request, response) => {
  try {
    const newMovie = await Movie.create(request.body)
    response.status(201).json({
      status: 'success',
      data: { newMovie }
    })
  } catch (error) {
    response.status(404).json({
      status: 'fail',
      message: 'Invalid data!'
    })
  }
}

exports.updateMovie = async (request, response) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      request.params.id, request.body, {
        new: true,
        runValidators: true
      })
    response.status(200).json({
      status: 'success',
      data: { movie }
    })
  } catch (error) {
    response.status(404).json({
      status: 'fail',
      message: error
    })
  }
}

exports.deleteMovie = async (request, response) => {
  try {
    await Movie.findByIdAndDelete(
      request.params.id)
    response.status(204).json({
      status: 'success',
      data: null
    })
  } catch (error) {
    response.status(404).json({
      status: 'fail',
      message: error
    })
  }
}

exports.deleteMovie = async (request, response) => {
  try {
    await Movie.findByIdAndDelete(
      request.params.id)
    response.status(204).json({
      status: 'success',
      data: null
    })
  } catch (error) {
    response.status(404).json({
      status: 'fail',
      message: error
    })
  }
}
