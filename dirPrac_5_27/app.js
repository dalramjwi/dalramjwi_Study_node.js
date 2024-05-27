const fs = require("fs");
fs.readdir("./data", (err, data) => {
  console.log(data);
});
