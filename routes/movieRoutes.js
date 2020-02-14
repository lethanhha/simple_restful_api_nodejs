const express = require('express')
const movieCtrl = require('./../controllers/movieController')

const router = express.Router()

// Routes
router.route('/')
  .get(movieCtrl.getAllMovies)
  .post(movieCtrl.createMovie)

router.route('/:id')
  .get(movieCtrl.getMovie)
  .patch(movieCtrl.updateMovie)
  .delete(movieCtrl.deleteMovie)

module.exports = router
