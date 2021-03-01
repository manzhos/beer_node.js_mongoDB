const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../app/models/user')
const router = Router()

// /api/auth/register
router.post(
  '/register',
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data'
        })
      }

      const { name, password } = req.body

      const candidate = await User.findOne({ name })

      if (candidate) {
        return res.status(400).json({ message: 'Already register' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ name, password: hashedPassword })

      await user.save()

      res.status(201).json({ message: 'User is registered' })
    } catch (e) {
      res.status(500).json({ message: 'Something wrong. Try again.' })
    }
  })

// /api/auth/login
router.post(
  '/login',
  [
    check('name', 'Input correct name').normalizeEmail().isEmail(),
    check('password', 'Input password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data'
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'User not find' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect password. Try again.' })
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.json({ token, userId: user.id })
    } catch (e) {
      res.status(500).json({ message: 'Something wrong. Try again.' })
    }
  })

module.exports = router
