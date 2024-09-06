const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const app = express()
const productRoute = require('./routes/product.route.js')

dotenv.config()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send("Hello from Node API server")
})

mongoose.connect(process.env.DATABASE_URL)
.then(() => {
  console.log("Connected to database!")
  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
})
.catch(() => {
  console.log("Connection failed.")
}

)