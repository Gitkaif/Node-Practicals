const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");

const user = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = user;
