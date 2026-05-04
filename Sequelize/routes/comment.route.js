const express = require('express');
const createCmt = require('../controllers/comment.controller');
const commentRoutes = express.Router()

commentRoutes.post('/users/:id/posts/:postId/comments', createCmt)

module.exports = commentRoutes