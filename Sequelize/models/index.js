const user = require('../models/user.model');
const post = require('../models/post.model')

user.hasMany(post,{
    foreignKey:"userId",
})

post.belongsTo(user,{
    foreignKey:"userId"
})

module.exports = {user,post}