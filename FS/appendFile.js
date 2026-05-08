const fs = require('fs')

fs.appendFile("new.txt","new line",(err)=>{
    if(err){
        console.log(err)
        return
    }
})