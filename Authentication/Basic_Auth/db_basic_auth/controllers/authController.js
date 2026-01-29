const model = require('../models/userModel')

const addUser = async(req,res)=>{
    const user = new model(req.body)
    const result = await user.save()
    res.status(201).json({
        message:'user created...',result
    })
    
}

module.exports = addUser;
