const beers = require('../app/controllers/beers')

module.exports = (app) => {
  app.get('/beers', beers.getAll)
  app.post('/addbeer', beers.create)

  // app.put()
  // app.delete()
}
