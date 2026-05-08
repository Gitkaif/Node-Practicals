const fs = require('fs')

fs.mkdir("uploads/images/today",{recursive:true},(err)=>{
    if(err){
        console.log(err)
        return
    }
})