const express = require('express');
const app = express();

//user route
app.get('/user',(req,res,next)=>{
    const user = false;
    if(!user){
        return next(new Error('User not found!!!'))
    }
    res.send('User proile....');
})

//error-handling middleware
app.use((err,req,res,next)=>{
    res.status(404).send(err.message);
})


app.listen(3000,()=>{
    console.log('Server is running...');
    
})



//------------------------------------------------------------------------
// app.get('/user',(req,res)=>{
//     const user = false;
//     if(!user){
//        throw new Error('user not found..')
//     }
//     res.send('User proile....');
// })

//if we did this approch throwing err without using next then the server will crash and stop 


//----------------------------------------------------------------------------------
// app.get('/user', (req, res) => {
//   const user = false;

//   if (!user) {
//     return res.status(404).send('User not found!!!');
//   }

//   res.send('User profile...');
// });

//this is also bad approach - handling error inside every route each time






















