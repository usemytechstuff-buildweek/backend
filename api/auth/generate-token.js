const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets');

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
    }

    const options = {
        expiresIn: '4h'
    }

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = {
    generateToken
}