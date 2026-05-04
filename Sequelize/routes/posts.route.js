const express = require('express')
const createPost = require('../controllers/posts.controller')
const postRoutes = express.Router()

postRoutes.post('/users/:id/posts',createPost)

module.exports = postRoutes