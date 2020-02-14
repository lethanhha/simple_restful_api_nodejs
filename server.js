const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')

// Connect Database
const db = process.env.DATABASE_LOCAL

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(con => {
  console.log('Database connected!')
})

// Start Server
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
