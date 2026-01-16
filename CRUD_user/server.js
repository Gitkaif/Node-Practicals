const express = require('express');
const connectDB = require('./config/db')
const userRouter = require('./routes/userRoute')
const app = express();

connectDB();

app.use(express.json())
app.use('/user',userRouter);




app.listen(3000,()=>{
    console.log('server is running')
})