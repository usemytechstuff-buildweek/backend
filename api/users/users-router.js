const User = require('./users-model');
const router = require('express').Router();

router.get('/', (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
})

router.put('/:id', (req, res) => {
    const { id } = req.params
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
})

module.exports = router;