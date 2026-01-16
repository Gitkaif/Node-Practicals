function checkAge(age,callback){
    if(age<18){
        callback("Under age!",null); // (err,result) so in this first arg is error and second is result..so if age<18 there is no success case so it is kept as null
        return; // very important ...because without return; it will execute the further 
    }
    callback(null,"Allowed to enter..."); // (err,data) in this case first arg is error so it is kept as null because in this case(age>18) there is no error....and the second arg is success msgg
}

checkAge(17,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
        
    }
})