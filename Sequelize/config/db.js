const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres:1234@localhost:5432/testdb",
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {connectDB,sequelize}
 