const express = require('express');
const route = require('./Routes/route.js');
const connectDB = require('./Config/db.js');

const app = express();

connectDB();

app.use('/api',route);

app.use('/uploads',express.static('uploads'))
app.listen(3000,()=>{
    console.log('server is running....')
})