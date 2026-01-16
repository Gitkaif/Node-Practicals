const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/new_db')
        console.log('database connected..')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;