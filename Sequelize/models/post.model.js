const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const post = sequelize.define("post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
});


module.exports = post