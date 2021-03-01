const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

mongoose.model('User', UserSchema)
