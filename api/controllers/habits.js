const express = require('express');
const router = express.Router();


const Habit = require('../models/habit');
const User = require('../models/user');
const verifyToken = require('../middleware/middleware')




// get all the habits for each user/email 
router.get('/', verifyToken, async (req, res) => {
	try {
		const habits = await Habit.findByEmail(req.email);
		res.status(200).json(habits); 
	} catch (err) {
		res.status(500).send({ err });
	}
});

//get a specific habit by id
router.get('/:id', verifyToken, async (req, res) => {
	try {
		const { id } = req.params;
		const habit = await Habit.findById(id);
		res.status(200).send({ habit });
	} catch (err) {
		res.status(500).send({ err });
	}
});

// Create habits
router.post('/', verifyToken, async (req, res) => {
	try {
		const habit = await Habit.create({ ...req.body, email: req.email });
		res.status(201).json(habit); 
	} catch (err) {
		res.status(500).send({ err });
	}
});

// Delete habits
router.delete('/:id', verifyToken,  async (req, res) => {
	try {
		const habit = await Habit.findById(req.params.id);
		await habit.destroyHabit();
		res.status(204).json();
	} catch (err) {
		if (err.message === 'Habit not found') {
			res.status(404).json({ err: err.message });
		} else {
			res.status(500).send();
		}
	}
});

//check if a habit is complete
router.get('/:id/complete', verifyToken, async (req, res) => {
	try {
		const habit = await Habit.findById(req.params.id);
		const resp = await habit.isComplete;
		res.status(200).json({ ...habit, isComplete: resp });
	} catch (err) {
		res.status(404).send({ err: err.message });
	}
});

// mark as complete 
router.post('/:id/complete', verifyToken, async (req, res) => {
	try {
		const habit = await Habit.findById(req.params.id);
		const resp = await habit.markAsComplete();
		res.status(200).json(resp);
	} catch (err) {
		console.log(err.message);
		res.status(404).send({ err: err.message });
	}
});

module.exports = router;
