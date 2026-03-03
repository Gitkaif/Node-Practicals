const express = require("express");
const connectDB = require("./db");
const router = require("./emp.routes");
const app = express();
connectDB();

app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("server running...");
});
