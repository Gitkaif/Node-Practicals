function validateUser(username,password,callback){
    if(!username || !password){
        callback("Username & password is required!",null);
        return;
    }
    if(username!="kaif" || password!="1234"){
        callback("Invalid credentials...",null);
        return;
    }
    callback(null,"User logged in successfully...")
};

validateUser("","1234",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
    
    
})