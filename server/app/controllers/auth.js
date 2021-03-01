const mongoose = require('mongoose')
const bCrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/app')

const User = mongoose.model('User')

const signIn = (req, res) => {
  const { name, password } = req.body
  User.findOne({ name })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'User does not exist.' })
      }

      const isValid = bCrypt.compareSync(password, user.password)
      if (isValid) {
        const token = jwt.sign(user._id.toString(), jwtSecret)
        res.json({ token })
      } else {
        res.status(401).json({ message: 'Invalid credintials.' })
      }
    })
    .catch(err => res.status(500).json(err))
}

module.exports = {
  signIn
}
