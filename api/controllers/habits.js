const Habit = require('../models/habit');

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

// async function create (req, res) {
//     try {
//         const book = await Book.create(req.body.title, req.body.year_of_publication, req.body.abstract, req.body.author_id );
//         res.status(201).json(book)
//     } catch (err) {
//         res.status(422).json({err})
//     }
// }

// async function destroy (req, res) {
//     try {
//         const book = await Book.findById(parseInt(req.params.id));
//         await book.destroy();
//         res.status(204).json('Book deleted');
//     } catch (err) {
//         res.status(404).json({err});
//     }
// }



// // get all the habits for each user/email 
// router.get('/', /*verifyToken,*/ async (req, res) => {
// 	try {
// 		const habits = await Habit.findByEmail(req.email);
// 		res.status(200).json(habits); 
// 	} catch (err) {
// 		res.status(500).send({ err });
// 	}
// });

// //get a specific habit by id
// router.get('/:id',/*verifyToken,*/ async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const habit = await Habit.findById(id);
// 		res.status(200).send({ habit });
// 	} catch (err) {
// 		res.status(500).send({ err });
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

// // Delete habits
// router.delete('/:id', /*verifyToken,*/ async (req, res) => {
// 	try {
// 		const habit = await Habit.findById(req.params.id);
// 		await habit.destroyHabit();
// 		res.status(204).json();
// 	} catch (err) {
// 		if (err.message === 'Habit not found') {
// 			res.status(404).json({ err: err.message });
// 		} else {
// 			res.status(500).send();
// 		}
// 	}
// });

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

module.exports = {index, show};
