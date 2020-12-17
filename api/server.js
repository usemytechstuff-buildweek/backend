const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

const authRouter = require('./auth/auth-router');
const userRoute = require('./users/users-router');
// const rentalRouter = require('./items/items-router');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', userRoute);
// server.use('/api/rentals', rentalRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API is up and running' })
});

module.exports = server;