// example 1
const fs = require('fs');

// const file = "eg.txt";

// const errorFirstCallback = (err,data)=>{
//     if(err){
//       return console.log(err);
//     }
//     console.log('fucntion successfully executed...');
// };

// fs.readFile(file,errorFirstCallback);

// example 2
const file = './ErrorFirstCallback/eg.txt';
const errorFirstCallback = (err,data)=>{
    if(err){
        return console.log(err);
    }
    console.log('Function executed successfully...');
    console.log(data.toString());
}

fs.readFile(file,errorFirstCallback);