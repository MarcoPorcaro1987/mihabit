const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits')
const { verifyToken } = require('../middleware/middleware')

router.get('/', habitsController.index);
router.get('/:id', habitsController.show);
// router.get('/:id', habitsController.getUser);
router.post('/', habitsController.create);
router.delete('/:id', habitsController.destroy);

module.exports = router;
