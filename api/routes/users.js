const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')
const { verifyToken } = require('../middleware/middleware')

router.get('/', usersController.index);
// router.get('/:id', usersController.show);
router.get('/:id', verifyToken, usersController.getUser);
module.exports = router;
