const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const comment = sequelize.define(
  "comment",
  {
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = comment ;
