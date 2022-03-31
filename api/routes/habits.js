const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits')
const { verifyToken } = require('../middleware/middleware')

router.get('/', verifyToken, habitsController.index);
router.get('/:id', verifyToken, habitsController.show);
// router.get('/:id', habitsController.getUser);
router.post('/', verifyToken, habitsController.create);
router.delete('/:id', verifyToken, habitsController.destroy);

module.exports = router;
