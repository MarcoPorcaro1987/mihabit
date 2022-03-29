const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => res.send('Welcome to the jungle'))
const userRoutes = require('./controllers/users')

server.use('/users', userRoutes)

// const authRoutes = require('./controllers/auth');
// const userRoutes = require('./controllers/habits');
// server.use('/auth', authRoutes);

// server.use('/habits', habitsRoutes);
module.exports = server
