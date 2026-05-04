const express = require("express");
const {
  createUser,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser,
  getUserWithPosts,
} = require("../controllers/user.controller");

const routes = express.Router();

routes.post("/add", createUser);
routes.get("/users", getUsers);
routes.get("/users/:id", getUserByID);
routes.put("/users/:id", updateUser);
routes.delete("/users/:id", deleteUser);
routes.get('/users/:id/posts',getUserWithPosts)

module.exports = routes;
