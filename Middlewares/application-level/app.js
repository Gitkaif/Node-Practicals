const express = require('express');

const app = express();

app.use(express.json());

// APPLICATION LEVEL MIDDLEWARE .....RUNS FOR EVERY REQUEST
function logger(req,res,next){
console.log(`Method: ${req.method}`);
console.log(`Url: ${req.url}`);

// VERY IMP...MOVES TO NEXT MIDDLEWARE OR ROUTE HANDLER
next();

}
// REGISTER'S THE MIDDLEWARE
app.use(logger);


//ROUTE HANDLERS...
app.get('/',(req,res)=>{
    res.send('home page...')
});

app.post('/add',(req,res)=>{
    res.send('add page...')
})


app.listen(3000,()=>{
    console.log('server is live...');
    
})

//------------------------------------------------RUN-------------------------------
//on postman 
// get-(http://localhost:3000)  or post-(http://localhost:3000/add)    --we already know on this url's it will log on the terminal
// * get.post....-(http://localhost:3000/abcde)   --it will log for this url also...because it is application level so it will log for every route..