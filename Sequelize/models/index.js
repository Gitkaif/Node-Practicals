const user = require("../models/user.model");
const post = require("../models/post.model");
const comment = require("../models/comment.model");

user.hasMany(post, {
  foreignKey: "userId",
});

post.belongsTo(user, {
  foreignKey: "userId",
});

user.hasMany(comment, {
  foreignKey: "userId",
});

comment.belongsTo(user, {
  foreignKey: "userId",
});

post.hasMany(comment, {
  foreignKey: "postId",
});

comment.belongsTo(post, {
  foreignKey: "postId",
});

module.exports = { user, post, comment };
