const User = require('./users-model');

const validateUserId = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    try {
      if (!user) {
        res.status(404).json({ message: `User with id ${id} not found` });
      } else {
        req.user = user;
        next();
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving the user.' })
    }
  };

  const validateUser = (req, res, next) => {
    const body = req.body
    const username = req.body.username
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    if (!body) {
      res.status(400).json({ message: 'Missing user data.' })
    } else if (!username) {
        res.status(400).json({ message: 'Missing required username field.' })
    } else if (!firstName) {
        res.status(400).json({ message: 'Missing required firstName field.' })
    } else if (!lastName) {
        res.status(400).json({ message: 'Missing required lastName field.' })
    } else {
      next();
    }
  };

  const validateRental = (req, res, next) => {
    const rental_name = req.body.rental_name
    const rented = req.body.rented
    const price = req.body.price_per_day
  if ( !rental_name || !rented || !price ) {
    res.status(400).json({ message: 'Missing required field.' })
  } else {
    next();
    }
  }

  module.exports = {
      validateUserId,
      validateUser,
      validateRental
  }