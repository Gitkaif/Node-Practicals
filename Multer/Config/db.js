const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/multerdb')
        console.log('Database connected..')
    } catch (error) {
        console.log('Database error!!');
        
    }
}
module.exports = connectDB;