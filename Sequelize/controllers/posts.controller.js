const { post } = require("../models");
const { user } = require("../models");

const createPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userr = await user.findByPk(id);
  if (userr) {
    const post = await userr.createPost({ title, content });
    return res.status(201).json({ message: "post created", data: post });
  }
  return res.status(404).json({message:'user not found'})
};

module.exports = createPost;
