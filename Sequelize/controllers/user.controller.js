const User = require("../models/user.model");
const post = require("../models/post.model")

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  return res.status(201).json({ message: "user added" });
};

const getUsers = async (req, res) => {
  try {
    // const users = await User.findAll({attributes:["name"]});
    // const users = await User.findAll({where:{name:"kaif"}});
    // const users = await User.findAll({order:[["id","desc"]]});
    const users = await User.findAll({});
    if (!users) return res.status(400).json({ message: "no users found" });
    return res.status(200).json({
      message: "user found",
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserByID = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(200).json({ message: "user not found" });
    }
    return res.status(200).json({
      message: "user found",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.update(req.body, { where: { id } });
    const user = await User.findByPk(id);
    return res.status(203).json({
      message: "user updated",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    await User.destroy({ where: { id } });
    return res.status(200).json({ message: "user deleted", data: user });
  } catch (error) {
    console.log(error);
  }
};



const getUserWithPosts = async(req,res)=>{
  const user = await User.findByPk(req.params.id,{include:post})
  if(!user){
    return res.status(404).json({message:"user not found..."})
  }
  return res.status(200).json({data:user})
}
module.exports = { createUser, getUsers, getUserByID, updateUser, deleteUser , getUserWithPosts};
