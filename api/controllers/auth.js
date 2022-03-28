const express = require('express')
const router = express.Router()

const bycrypt = require('bcryptjs')
const { user } = require('pg/lib/defaults')

// models import

// const user = require('../models/user.js')

router.post('/register', async(req,res) => {
    try{
        const salt = await bycrypt.genSalt()
        const hashed = await bycrypt.hash(req.body.password, salt)
        // await User.create({...req.body, password: hashed})
        res.status(201).json({message: 'User successfully recreated'})
    } catch (err) {
        res.status(500).json({err})
    }
})

router.post('/login', async(req, res) => {
    try{
        // const user = await user.findbyemail(req.body.email)
        if (!user){
            throw new Error("No user with this email")
        }
        const check = bycrypt.compare(req.body.password, user.password) // compares request body and password in database
        if(!!check){
            res.status(200).json({user: user.username})
        }else{
            throw new Error('incorrect password')
        }
    }catch (err){
        res.status(401).json({err})
    }
})

module.exports = router