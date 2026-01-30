const express = require('express');
const routes = require('./routes/auth.routes')
const connectDB = require('./config/db')
require('dotenv').config();
const app = express()
app.use(express.json())
connectDB();

app.use('/jwt',routes);


app.listen(process.env.PORT,()=>{
    console.log('server started..');
    
})
