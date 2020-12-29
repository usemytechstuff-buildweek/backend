const Rental = require('./rentals-model');
const restricted = require('../restricted');
const router = require('express').Router();

router.get('/', restricted, (req, res) => {
    Rental.find()
    .then(rental => {
        res.status(200).json(rental)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.get('/:id', restricted, (req, res) => {
    const { id } = req.params
    Rental.findById(id)
    .then(rental => {
        if (!rental) {
            res.status(404).json({ message: `No rental found with id ${id}` });
        } else {
            res.status(200).json(rental)
        }
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params
    const changes = req.body
    Rental.update(id, changes)
    .then(updatedRental => {
        if (updatedRental > 0) {
            return Rental.findById(id)
        }
    })
    .then(rental => {
        res.status(200).json(rental)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.delete('/:id', restricted, (req, res) => {
    const { id } = req.params
    Rental.remove(id)
    .then(() => {
        res.status(200).json({ message: 'The rental has been deleted' })
    })
    .catch(error => {
        res.status(500).json({ message: error.message})
    })
})

module.exports = router;