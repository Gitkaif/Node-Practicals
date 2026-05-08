const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.post("/create", (req, res) => {
  const data = req.body;
  fs.writeFile("data.json", JSON.stringify(data, ["name"], 2), (err) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    res.json({ message: "file created" });
  });
});

app.listen(3000, () => console.log("server started"));
