const User = require('../users/users-model');

const checkPayload = (req, res, next) => {
    let { username, password, firstName, lastName } = req.body
    if (!username || !password || !firstName || !lastName) {
        res.status(401).json(
            'Username, password, first name, and last name are required'
        )
    } else {
        next()
    }
}

const checkUsernameUnique = async (req, res, next) => {
    try {
        let { username } = req.body
        const rows = await User.findBy({ username: username })
        if (!rows.length) {
            next()
        } else {
            res.status(401).json(
                'Username is not unique, please choose a different one'
            )
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const checkUsernameExists = async (req, res, next) => {
    try {
        const rows = await User.findBy({ username: req.body.username })
        if (rows.length) {
            req.userData = rows[0]
            next()
        } else {
            res.status(401).json('Username does not exist')
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    checkPayload,
    checkUsernameUnique,
    checkUsernameExists
}