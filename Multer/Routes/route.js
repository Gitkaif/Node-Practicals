const express = require('express');
// const { uploadHandler} = require('../controllers/fileController.js');
const { uploadHandler,getAll } = require("../controllers/fileController")
const {upload} = require('../Middlewares/multer')
const route = express.Router()

route.post('/upload',upload.single('image'),uploadHandler);
route.get('/',getAll);

module.exports = route;