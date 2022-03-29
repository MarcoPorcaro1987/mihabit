const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const authroutes = require('./controllers/auth')

server.use('/auth', authroutes)

server.get('/', (req, res) => res.send('Welcome to the jungle'))

module.exports = server
