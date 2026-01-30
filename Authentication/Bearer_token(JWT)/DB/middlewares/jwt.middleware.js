const jwt = require('jsonwebtoken');

function jwtMiddleware(req,res,next){

    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message:'Bearer token is required'})
    }

    const token = authHeader.split(' ')[1]
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.use = decode;
    next()

}

module.exports = jwtMiddleware