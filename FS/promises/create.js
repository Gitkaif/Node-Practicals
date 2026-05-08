const express = require("express");
const fs = require("fs").promises;
const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  try {
    const data = req.body;
    await fs.writeFile("data.json", JSON.stringify(data,["name"],2))
      res.json({message:"file created"})
  } catch (error) {
    console.log(error);
    
  }
});

app.listen(3000, () => console.log("server started"));
