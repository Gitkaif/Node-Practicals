const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "data.txt");
const data = {
  name: "kaif",
  age: 21,
};
fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file created");
});
