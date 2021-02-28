const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  password: String
})

mongoose.model('User', UserSchema)
