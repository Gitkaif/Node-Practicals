const cluster = require("cluster");
const express = require("express");
const os = require("os");
const totalCPUs = os.cpus().length;

if(cluster.isPrimary){
    console.log(`Primary ${process.pid} is running`);

    cluster.on('fork',(worker) => {
        console.log(`Worker ${worker.process.pid} is running`);
    });

    cluster.on('online',(worker) => {
        console.log(`Worker ${worker.process.pid} is online`);
    });
    cluster.on('exit',(worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code ${code}`);
        cluster.fork();
    });

    for(let i = 0; i < totalCPUs; i++){
        cluster.fork();
    }

}else{
    const app = express()
    app.get('/', (req, res) => {
        res.send(`Hello, World! ${process.pid}`);
    });

    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });

}