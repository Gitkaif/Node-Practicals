const cluster = require('cluster');
const { log } = require('console');
const express = require('express')
const os = require('os')

const totalCPUs = os.cpus().length;

if(cluster.isPrimary){
    console.log(`Primary cluster ${process.pid} is running`)
    for(let i=1; i<totalCPUs; i++){
        cluster.fork()
    }

}else{
    const app = express()

    app.get('/',(req,res)=>{
        res.send('hello')
    })

    app.get('/crash',()=>{
        console.log(`crashing worker ${process.pid}`)
        process.exit(1)
    })

    app.listen(3000,()=>{
        console.log('server running');
        
    })

}