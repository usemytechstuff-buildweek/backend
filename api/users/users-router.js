const User = require('./users-model');
const Rental = require('../rentals/rentals-model');
const restricted = require('../restricted');
const router = require('express').Router();
const { validateUserId, validateRental } = require('./users-middlewares')

router.get('/', restricted, (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.get('/:id', validateUserId, restricted, (req, res) => {
    res.status(200).json(req.user)
})

router.get('/:id/rentals', validateUserId, restricted, (req, res) => {
    const { id } = req.params
    User.findRentalByUserId(id)
    .then(rental => {
        res.status(200).json(rental)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.put('/:id', validateUserId, restricted, (req, res) => {
    const { id } = req.params
    const changes = req.body
    User.update(id, changes)
    .then(updatedUser => {
        if (updatedUser > 0) {
            return User.findById(id)
        }
    })
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.post('/:id/rentals', validateUserId, validateRental, restricted, (req, res) => {
    const newRental = req.body
    Rental.add({ ...newRental, user_id: req.user.id })
    .then(rental => {
        res.status(200).json(rental)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.delete('/:id', validateUserId, restricted, (req, res) => {
    const { id } = req.params
    User.remove(id)
    .then(() => {
        res.status(200).json({ message: 'The user has been deleted' })
    })
    .catch(error => {
        res.status(500).json({ message: error.message})
    })
})

module.exports = router;