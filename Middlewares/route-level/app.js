const express = require('express');

const app = express();

//ROUTE LEVEL MIDDLEWARE....
function authMiddleware(req,res,next){
    const token = req.headers.token;  //WE NEED TO PASS key=token|value=abcd FROM THE req.headers
    if(!token){
      return res.status(401).send('Access denied!...')
    }

    next();
}


app.get('/public',(req,res)=>{
    res.send('Public page...')
});

//WORKS IN ONLY THESE ROUTE...
app.get('/admin',authMiddleware,(req,res)=>{
    res.send('Dashboard page...')
})


app.listen(3000,()=>{
    console.log('server is running...');
    
})