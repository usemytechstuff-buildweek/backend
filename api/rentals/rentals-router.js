const Rental = require('./rentals-model');
const router = require('express').Router();

router.get('/', (req, res) => {
    Rental.find()
    .then(rental => {
        res.status(200).json(rental)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
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