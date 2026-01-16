const userModel = require('../models/userModel');

exports.addUser = async(req,res)=>{
    try {
        // const newUser = new userModel(req.body);
        // const result = await newUser.save();
        //OR
        const newUser = await userModel.create(req.body)
        res.status(201).json({message:'new user added..'},newUser)
    } catch (error) {
        res.status(500).json({message:error})
    }

}

exports.showUser = async(req,res)=>{
    try {
        const user = await userModel.find({})
        if(user!=null){
            res.status(200).json({message:'user found'},user)
        }
    } catch (error) {
        res.status(404).json({message:'user not found..'})
    }
    
}

exports.showUserById = async(req,res)=>{
    try {
        const user = await userModel.findById(req.params.id)
    if(user!=null){
        res.status(203).json({
            status:'success',
            data:user
        })
    }
    } catch (error) {
        res.status(404).json({message:'user not found'})
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const getUser = await userModel.findByIdAndDelete(req.params.id)
        if(getUser!=null){
            res.status(200).json({message:'user deleted'})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

exports.updateUser = async(req,res)=>{
    try {
        const{id} = req.params
        const{name,age} = req.body;
        if(!name || !age){
            return res.status(400).json({message:'all fields are required..'})
        }
        const updatedUser = await userModel.findByIdAndUpdate(id,{name, age},{new:true,runValidators:true})
        if(!updatedUser){
            return res.status(404).json({message:'user not found...'})
        }
        res.status(200).json({message:'user updated successfully',updatedUser})
    } catch (error) {
        res.status(500).json({message:error})
    }
}