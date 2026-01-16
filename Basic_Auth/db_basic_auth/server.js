//import "dotenv/config"
const connectDB = require('./config/db')
const express = require('express');
const Routes = require('./routes/userRoute');
const basicAuth = require('./middlewares/basic_auth_middleware');
const app = express();
require('dotenv').config();

connectDB();


app.use(express.json());


app.use('/',Routes)
app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/protected',basicAuth,(req,res)=>{
    res.send(`welcome ${req.user.username} `);
})

app.listen(3000,()=>{
    console.log('Server is running');
    
})
