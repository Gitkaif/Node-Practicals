const User = require("./models/user.model");
const { connectDB, sequelize } = require("./config/db");
const express = require("express");
require("./models")
const routes = require("./routes/user.route");
const postRoutes = require('./routes/posts.route')
const commentRoutes = require('./routes/comment.route')
const app = express();

app.use(express.json());
app.use("/api", routes);
app.use("/post",postRoutes)
app.use("/comment",commentRoutes)
app.get("/", (req, res) => {
  res.send("Home page");
});

const startServer = async () => {
  try {
    await connectDB();

    await sequelize.sync({alter:true});
    console.log("tables synced");

    app.listen(3000, () => {
      console.log("server started");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
