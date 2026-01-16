function amount(balance, callback){
    if(typeof balance!=="number"){
        callback('Not a number',null);
        return;
    }
    if(balance<=0){
        callback('No is less then 0',null);
        return;
    }
    callback(null,'Payment allowed...');
}
amount('anfk',(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(data);
        
    }
})