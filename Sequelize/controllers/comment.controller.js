const { user, post, comment } = require("../models");

const createCmt = async (req, res) => {
  const { id, postId } = req.params;
  const { content } = req.body;
  const userr = await user.findByPk(id);
  if (!userr) {
    return res.status(404).json({ message: "user not found" });
  }

  const posts = await post.findByPk(postId);
  if (!posts) {
    return res.status(404).json({ message: "post not found" });
  }

  const cmt = await posts.createComment({ content, userId: userr.id });
  return res.status(201).json({ message: "comment created", data: cmt });
};

module.exports = createCmt;
