const express = require('express');
const app = express();

app.use((req,res,next)=>{

    const auth = req.headers.authorization;

    if(!auth){
        res.set('WWW-Authenticate','Basic');
        return res.status(401).send('Authentication required!');
    }

    const base64 = auth.split(' ')[1];
    const decoded = Buffer.from(base64,'base64').toString();
    const[username, password] = decoded.split(':');

    if(username==='kaif' && password==='123'){
        next()
    }else{
        return res.status(401).send('Invalid credentials !')
    }
})


app.get('/',(req,res)=>{
    res.send('Basic auth successfull...')
})


app.listen(3000,()=>{
    console.log('Server is running on 3000...');
    
})