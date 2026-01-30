const express = require('express');
const {register,login} = require('../controllers/auth.controller')
const jwtMiddleware = require('../middlewares/jwt.middleware')

const routes = express.Router()

routes.post('/register',register)
routes.post('/login',login)

routes.get('/protected',jwtMiddleware,(req,res)=>{
    res.send('Protected route accessed with jwt')
})

module.exports = routes