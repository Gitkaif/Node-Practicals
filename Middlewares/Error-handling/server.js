const express = require('express');
const app = express();

//route1 -no error
app.get('/',(req,res)=>{
    res.send('Home page....')
})

//route2 -no error
app.get('/products',(req,res)=>{
    res.send('Products page....')
})

//route3 -has eror
app.get('/user',(req,res,next)=>{
    const user = false;
    if(!user){
        return next(new Error('User not found!!!....'))
    }
    res.send('User profle...')
});

//route4 - no error
app.get('/orders',(req,res)=>{
    res.send('Orders page....')
})

//error middleware
app.use((err,req,res,next)=>{
    console.log('Error occurred',err.message);
    res.status(404).send(err.message);
})

app.listen(3000,()=>{
    console.log('server is running....');
    
})


{/*In Express, when an error occurs in a route and next(err) is called, 
only that request is handled by the error middleware while other routes continue to work normally.*/}