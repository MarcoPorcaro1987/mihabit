const User = require('../models/user')
const Habit = require('../models/habit')
// const { verifyToken } = require('../middleware/middleware');
// verifyToken,
async function index(req, res) {
    try {
        const users = await User.all
        res.status(200).json(users);
    } catch (err) {
        res.status(404).send(err);
    }
}

async function show(req, res) {
    try {
        const user = await User.findById(req.params.id);
        const habits = await user.habits;
        res.status(200).json({ ...user, habits });
    } catch (err) {
        res.status(500).send(err);
    };
}

async function getUser(req, res){
    try {
        const user = await db.query(`SELECT * FROM habits WHERE user_id = $1;`, [ this.id ]);
        const habits = habitsData.rows.map(d => new Habit(d));
        res.json(habits);
    } catch (err) {
        res.status(404).json({err});
    }
};

async function getUser(req, res){
    try {
        const user = await User.findById(parseInt(req.params.id))
        console.log(user)
        const habits = await user.habits
        console.log(habits)
        res.json(habits)
    } catch(err) {
        res.status(404).send({err}) 
    }
};

// router.get('/:id/dogs', async (req, res) => {
//     try {
//         const owner = await Owner.findById(parseInt(req.params.id))
//         console.log(owner)
//         const dogs = await owner.dogs
//         console.log(dogs)
//         res.json(dogs)
//     } catch(err) {
//         res.status(404).send({err}) 
//     }
// })
// router.get('/:email',  async function show(req, res) {
//     try {
//         const user = await User.findByEmail(req.params.email);
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).send({err});
//     }
// })
// verifyToken,

// verifyToken,
// async function show(req, res) {
//     try {
//         const user = await User.findById(req.params.id);
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(404).send({err});
//     }
// }



module.exports = {index, show, getUser}

