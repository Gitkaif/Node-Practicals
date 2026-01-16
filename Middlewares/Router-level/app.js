const express = require('express');
const app = express();


//Router
const AdminRouter = express.Router();

//Router-level middleware
AdminRouter.use((req,res,next)=>{
    const token = req.headers.token;
    if(!token){
        return res.status(401).send('Admin access denied!!!!!');
    }
    next();
})


// Admin routes...
AdminRouter.get('/dashboard',(req,res)=>{
    res.send('Admin dashboard page....')
})

AdminRouter.get('/settings',(req,res)=>{
    res.send('Admin settings page....')
})


//Public routes
app.get('/public',(req,res)=>{
    res.send('public page....')
})
app.get('/',(req,res)=>{
    res.send('Home page....')
})



// Mount router
app.use('/admin',AdminRouter);


app.listen(3000,()=>{
    console.log('server is running....');
})
