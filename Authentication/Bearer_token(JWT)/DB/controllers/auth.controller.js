const mongoose = require('mongoose');
const usermodel = require('../models/user.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//register
const register = async(req,res)=>{

    const {username, password} = req.body;

    const existingUser = await usermodel.findOne({username});
    if(existingUser){
        return res.status(400).json({message:'user already exists'})
    }

    const newUser = new usermodel({username, password});
    const result = await newUser.save()
    res.status(201).json({message:'user registered successfully',result})

}



//login
const login = async(req,res)=>{

    const{username, password} = req.body;

    const user = await usermodel.findOne({username})
    if(!user){
        return res.status(401).json({message:'User does not exists'})
    }

    if(user.password != password){
        return res.status(401).json({message:'User does not exists'})
    }

    const token = jwt.sign(
        {userId:user._id, username:user.username},
        process.env.JWT_SECRET_KEY,
        {expiresIn:'1h'}
    )

    res.json({
        message:'User verified, token generated',
        token:token
    })

}


module.exports = {register,login};