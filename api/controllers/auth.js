require('dotenv').config()
const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const bycrypt = require('bcryptjs')
// const { user } = require('pg/lib/defaults')


const { verifyToken } = require('../middleware/middleware');
// models import

const User = require('../models/user')

// password hashing when registering
router.post('/register', async (req, res) => {
    try {
        const salt = await bycrypt.genSalt()
        const hashed = await bycrypt.hash(req.body.password, salt)
        await User.create({ ...req.body, password: hashed })
        res.status(201).json({ message: 'User successfully created' })
    } catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByEmail(req.body.email)
        console.log(user)
        if (!user) { throw new Error('No user with this email') }
        console.log(req.body.password)
        console.log(user.password)
        const authed =  await bycrypt.compare(req.body.password, user.password)
        
        if (!!authed) {
            jwt.sign({username: user.username, email: user.email}, process.env.SECRET_KEY, { expiresIn: '30m' }, (err, token) => {
                if (err) {
                    throw new Error('Error generating JWT')
                } else {
                    res.status(200).json({
                        success: true,
                        token: 'Bearer ' + token
                    })
                }
            })
            
        } else {
            throw new Error('User could not be authenticated')
        }
    } catch (err) {
        res.status(401).json({ err });
    }
})

module.exports = router;








// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findbyemail(req.body.email)
//         if (!user) {
//             throw new Error("No user with this email")
//         }
//         const check = bycrypt.compare(req.body.password, user.password) // compares request body and password in database
//         if (!!check) {
//             const payload = { username: user.username, email: user.email }

//             const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
//             const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)

//             await User.pushToken(user.userEmail, `Bearer ${refreshToken}`)
//             res.status(200).json({ accessToken: `Bearer ${accessToken}`, refreshToken: `Bearer ${refreshToken}` })

//         } else {
//             throw new Error('User could not be authenticated')
//         }
//     } catch (err) {
//         res.status(401).json({ err })
//     }
// })


// //checking refresh token
// router.post('/token', async (req, res) => {
//     try {
//         const user = await User.findbyemail(req.body.email)
//         if (!user) {
//             throw new Error("No user with this email")
//         }
//         const payload = { username: user.username, email: user.email }
//         const refreshToken = req.body.token

//         if (refreshToken === null) {
//             throw new Error('No token')
//         }
//         else if (!user.refreshTokens.includes(refreshToken)) {
//             throw new Error('Invalid token')
//         } else {
//             jwt.verify(refreshToken.split(' '[1], process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//                 if (err) {
//                     res.status(498);
//                 } else {
//                     const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
//                     res.status(200).json({ accessToken: `Bearer ${accessToken}` })
//                 }
//             }))

//         }
//     } catch (err) {
//         if (refreshToken === null) {
//             res.status(401).json({ err })
//         } else if (err === 'Error: Invalid token') {
//             res.status(403).json({ err })

//         }
//     }
// })


//logout function 

router.post('./logout', async (req, res) => {
    try {
        const user = await User.findbyemail(req.body.email)
        if (!user) {
            throw new Error('No user with this email')
        } else {
            User.clearRefreshTokens(user.userEmail, req.body.token)
            res.status(200)
        }

    } catch (err) {
        res.status(500)

    }
})




module.exports = router;


