const model = require('../models/userModel');

const basicAuth = async(req,res,next)=>{

    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        res.set('WWW-Authenticate','Basic');
        
        return res.status(401).send('Authorization required!!!')

    }

    const base64 = authHeader.split(' ')[1];
    const decoded = Buffer.from(base64,'base64').toString();
    const[username,password] = decoded.split(':');

    const user = await model.findOne({username});
    if(!user){
        return res.status(401).send('User not found!!!')
    }

    if(user.password !== password){
        return res.status(401).send('Invalid credentials...')
    }

    req.user = user;
    next();

}

module.exports = basicAuth;