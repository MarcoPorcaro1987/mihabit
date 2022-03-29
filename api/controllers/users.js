const User = require('../models/user')

const express = require('express');
const router = express.Router();

router.get('/:email', async function show(req, res) {
    try {
        const user = await User.findByEmail(req.params.email)
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send({err});
    }
})

router.get('/', async function index(req, res) {
    try {
        const users = await User.all
        res.status(200).json(users);
    } catch (err) {
        res.status(404).send(err);
    }
})

module.exports = router;
