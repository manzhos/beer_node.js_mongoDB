const beers = require('../app/controllers/beers')
const auth = require('../app/controllers/auth')
const authMiddleware = require('../middleware/auth')

module.exports = (app) => {
  // beers
  app.get('/beers', authMiddleware, beers.getAll)
  app.post('/addbeer', authMiddleware, beers.create)

  // app.put()
  // app.delete()

  // auth
  app.post('/login', auth.signIn)
}
