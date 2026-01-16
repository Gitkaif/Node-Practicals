const fs = require('fs');

fs.readFile('./ErrorFirstCallback/egsa.txt','utf8',(err,data)=>{  // (err,data) - error-first-callback!
    if(err){
        console.log(err);
        return; //only stops the callback function in case of err...
        
    }
    console.log(data);
    
});     
console.log('end...');  //prints first coz fs operations are async...
