const User = require('../models/user')

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



module.exports = {index, show}

