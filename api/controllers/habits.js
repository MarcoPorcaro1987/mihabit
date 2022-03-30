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

async function getUser(req, res){
        try {
            const habitsData = await db.query(`SELECT * FROM habits WHERE user_id = $1;`, [ this.id ]);
            const habits = habitsData.rows.map(d => new User(d));
            res.json(habits);
        } catch (err) {
            res.status(404).json({err});
        }
};


async function create (req, res) {
    try {
        const habit = await Habit.create({ habitName: req.body.habit_name, description: req.body.habit_description, frequency: req.body.habit_frequency, frequencyTarget: req.body.frequency_target, user_id: req.body.user_id });
        res.status(201).json(habit)
    } catch (err) {
        res.status(500).send({ err });
    }
}


// // Delete habits
async function destroy (req, res) {
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
};

module.exports = {index, show, getUser, create, destroy};

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
