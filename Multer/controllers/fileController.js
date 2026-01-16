const mongoose = require('mongoose');
const fileModel = require('../Models/model.js')

async function uploadHandler(req,res){
    try {
        if(!req.file){
            return res.status(404).json({
                success:false,
                message:'File not uploaded...'
            })
        }

        const tempFile = new fileModel(req.file);
        const file = await tempFile.save();
        res.status(201).json({message:'data added...',file})
       
    } catch (error) {
        res.status(500).json({
            message:error
        })
        console.log('heree err')
    }
}


async function getAll(req,res){

    try {
        const data = await fileModel.find();
        if(!data){
            return res.status(404).json({
                message:'Data not found'
            })
        }

        res.status(202).json({
            message:'record found...',
            data
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
    
}


module.exports =  {uploadHandler,getAll};