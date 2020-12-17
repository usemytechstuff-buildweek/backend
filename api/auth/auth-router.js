const bcrypt = require('bcryptjs');
const router = require('express').Router();
const { generateToken } = require('./generate-token');
const {
    checkPayload,
    checkUsernameUnique,
    checkUsernameExists
} = require('./auth-middlewares');

const User = require('../users/users-model');

router.post('/register', checkPayload, checkUsernameUnique, async (req, res) => {
    try {
        const rounds = process.env.BCRYPT_ROUNDS || 8
        const hash = bcrypt.hashSync(req.body.password, parseInt(rounds))
        req.body.password = hash
        const newUser = await User.add({ 
            username: req.body.username, 
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName 
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/login', checkPayload, checkUsernameExists, (req, res) => {
    try {
        const verifies = bcrypt.compareSync(req.body.password, req.userData.password)
        if (verifies) {
            const token = generateToken(req.userData)
            res.status(200).json({ 
                message: 'Welcome to our API, ' + req.userData.username, 
                token
            })
        } else {
            res.status(401).json('You shall not pass!')
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;