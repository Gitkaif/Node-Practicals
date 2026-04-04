const cluster = require("cluster");
const express = require("express");
const os = require("os");
const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);


  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello, World! ${process.pid}  total CPUs: ${totalCPUs}`);
  });

  app.get("/crash", (req, res) => {
    console.log(`Crashing worker ${process.pid}`);
    process.exit(1);
  });

  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
}
