const Habit = require('../models/habit');
const User = require('../models/user');

// const verifyToken = require('../middleware/middleware')

async function index (req, res) {
    try {
        const habits = await Habit.all;
        res.status(200).json(habits)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        const habit = await Habit.findById(req.params.id);
        res.status(200).json(habit)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const habit = await Habit.create({ habit_name: req.body.habit_name, habit_description: req.body.habit_description, habit_frequency: req.body.habit_frequency, frequency_target: req.body.frequency_target});
        res.status(201).json(habit)
    } catch (err) {
        res.status(500).send({ err });
    }
}


// // Delete habits
async function destroy (req, res) {
	try {
		const habit = await Habit.findById(req.params.id);
		await habit.destroy();
		res.status(204).json();
	} catch (err) {
		if (err.message === 'Habit not found') {
			res.status(404).json({ err: err.message });
		} else {
			res.status(204).send();
		}
	}
};

module.exports = {index, show, create, destroy};

// async function destroy (req, res) {
//     try {
//         const book = await Book.findById(parseInt(req.params.id));
//         await book.destroy();
//         res.status(204).json('Book deleted');
//     } catch (err) {
//         res.status(404).json({err});
//     }
// }


// //check if a habit is complete
// router.get('/:id/complete', /*verifyToken,*/ async (req, res) => {
// 	try {
// 		const habit = await Habit.findById(req.params.id);
// 		const resp = await habit.isComplete;
// 		res.status(200).json({ ...habit, isComplete: resp });
// 	} catch (err) {
// 		res.status(404).send({ err: err.message });
// 	}
// });

// // mark as complete 
// router.post('/:id/complete', /*verifyToken,*/ async (req, res) => {
// 	try {
// 		const habit = await Habit.findById(req.params.id);
// 		const resp = await habit.markAsComplete();
// 		res.status(200).json(resp);
// 	} catch (err) {
// 		console.log(err.message);
// 		res.status(404).send({ err: err.message });
// 	}
// });

// // Create habits
// router.post('/', /*verifyToken,*/ async (req, res) => {
// 	try {
// 		const habit = await Habit.create({ email: req.body.email, habitName: req.body.habit_name, description: req.body.habit_description, frequency: req.body.habit_frequency, frequencyTarget: req.body.frequency_target });
// 		res.status(201).json(habit); 
// 	} catch (err) {
// 		res.status(500).send({ err });
// 	}
// });
