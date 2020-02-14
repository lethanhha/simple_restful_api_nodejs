const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Movie = require('./../models/movieModel')

dotenv.config({ path: './config.env' })

const database = process.env.DATABASE_LOCAL

mongoose.connect(database, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(con => console.log('Database connected successfully!'))

// Read file
const movies = JSON.parse(
  fs.readFileSync(`${__dirname}/movies.json`, 'utf-8'))

// Import data
const importData = async () => {
  try {
    await Movie.create(movies)
    console.log('Data imported successfully!')
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

// Delete all data
const deleteData = async () => {
  try {
    await Movie.deleteMany()
    console.log('Data deleted successfully!')
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}
