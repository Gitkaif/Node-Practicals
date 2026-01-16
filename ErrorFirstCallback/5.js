function getUserName(userId,callback){
    if(!userId){
        callback("user ID is required..",null);
        return;
    }else{
        setTimeout(()=>{
            callback(null,"kaif");
        },1000)
    }
}
getUserName("1",(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(data);
        
    }
})