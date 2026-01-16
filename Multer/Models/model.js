const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fieldname:{
        type:String,
        required:true
    },
    originalname:{
        type:String,
        required:true
    },
    mimetype:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    }
})

const fileModel = new mongoose.model('fileModel',fileSchema);

module.exports = fileModel;

