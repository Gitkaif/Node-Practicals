const express = require('express');
const addUser = require('../controllers/authController');

const Routes = express.Router();

Routes.post('/add',addUser);

module.exports=Routes;