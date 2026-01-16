const express = require('express');
const app = express();

//MIDDLEWARE 1 - FOR CHECKING ACCESS
function authMiddleware(req,res,next){
    const token = req.headers.token;
    if(!token){
        return res.status(401).send('access denied!!!')
    };
    next();
}


//MIDDLEWARE 2 -FOR LOGGING
function logger(req,res,next){
    console.log('dashboard access granted....');
    next();
}

app.get('/',(req,res)=>{
    res.send('public page....')
});

//2 MIDDLEWARES APPLIED TO THIS ROUTE....
app.get('/admin',authMiddleware,logger,(req,res)=>{
    res.send('Dashboard page....');
})

app.listen(3000,()=>{
    console.log('server is running...');
    
})