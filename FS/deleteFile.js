const fs = require("fs");

fs.unlink("eg.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file deleted");
});
