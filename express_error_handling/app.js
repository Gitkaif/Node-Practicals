const express = require('express');

const app = express();


app.get('/',(req,res)=>{
        throw new Error('Broken')
    
})



// app.get('/',(req,res,next)=>{
//     setTimeout(function(){
//        return next(new Error('Broken'))
//     },100)
// })


// function getData(a){
    
//         throw new Error('failed')
    
// }
// app.get('/',async(req,res)=>{
//     const data = await getData()
//     res.send(data)
// })  



app.get('/',(req,res,next)=>{
    Promise.resolve()
    .then(()=>{
        throw new Error('promise error');
    })
    .catch(next);
})



// Error middleware
// app.use((err,req,res,next)=>{
//     console.log(err.stack);
//     res.status(500).json({
//         success:false,
//         message:err.message
//     })
// })

app.listen(3000,function(){
    console.log('server is running..');
    
})