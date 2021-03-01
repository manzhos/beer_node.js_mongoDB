const mongoose = require('mongoose')

const BeerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  tagline: String,
  first_brewed: Date,
  description: String,
  image_url: String,
  abv: Number
})

mongoose.model('Beer', BeerSchema)
