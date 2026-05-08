const fs = require("fs");

fs.rename("a.txt","new.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file renamed");
});
