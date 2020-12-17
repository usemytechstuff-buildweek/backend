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
    User.findById(id)
    .then(user => {
        if (!user) {
            res.status(404).json({ message: `No user found with id ${id}` });
        } else {
            res.status(200).json(user)
        }
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

// fix this
router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    User.update(id, changes)
    .then(user => {
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: `No user found with id ${id}` });
        }
    })
    .catch(error => {
        res.status(500).json({ message: error.message})
    })
})

router.delete('/:id', (req, res) => {
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