function divide(a,b,callback){
    if(b===0){
        callback('cannot divide by 0',null);
        return;
    }
    callback(null,a/b);

}
divide(9,3,(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(data);
        
    }
})