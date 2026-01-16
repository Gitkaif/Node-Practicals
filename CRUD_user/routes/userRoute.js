const express = require('express');
const { showUser, addUser, deleteUser, updateUser, showUserById } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/',showUser);
userRouter.post('/add',addUser);
userRouter.delete('/:id',deleteUser)
userRouter.put('/:id',updateUser)
userRouter.get('/:id',showUserById)

module.exports = userRouter
