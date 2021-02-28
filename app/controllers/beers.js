/* eslint-disable no-tabs */

const mongoose = require('mongoose')

const Beer = mongoose.model('Beer')

const getAll = (req, res) => {
  Beer.find()
    .exec()
    .then(beers => res.json(beers))
    .catch(err => res.status(500).json(err))
}

const create = (req, res) => {
  Beer.create(req.body)
    .then(createdBeer => res.json(createdBeer))
    .catch(err => res.status(500).json(err))
}

/*
const update = (req, res) => {
  Beer.findOneAndUpdate({ id: req.param.id }, req.body)
		.exec()
		.then(beer => req.json(beer))
		.catch(err => res.status(500).json(err)),
}

const remove = (req, res) => {
  Beer.deleteOne({ id: req.param.id })
		.exec()
		.then(beer => req.json({ success: true }))
		.catch(err => res.status(500).json(err)),
}
 */

module.exports = {
  getAll,
  create
}
