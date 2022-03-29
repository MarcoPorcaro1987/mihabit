const User = require('../models/user')

const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/middleware');

router.get('/:email', /*verifyToken,*/async function show(req, res) {
    try {
        const user = await User.findByEmail(req.params.email)
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send({err});
    }
})

router.get('/', /*verifyToken,*/ async function index(req, res) {
    try {
        const users = await User.all
        res.status(200).json(users);
    } catch (err) {
        res.status(404).send(err);
    }
})

router.get('/:id', /*verifyToken,*/ async function users(req, res) {
    try {
        const users = await User.findById(req.params.id)
        res.status(200).json(users);
    } catch (err) {
        res.status(404).send(err);
    }
})

module.exports = router

