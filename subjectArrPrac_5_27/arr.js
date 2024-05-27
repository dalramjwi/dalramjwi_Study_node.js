const fs = require("fs");
fs.readdir("./data", (err, fileList) => {
  // console.log(fileList);
  let fileArr = fileList;
  let htmlArr = [];
  console.log(fileArr);
  for (let i = 0; i < fileArr.length; i++) {
    if (i % 2 === 0) {
      htmlArr.push(fileArr[i]);
    }
  }
  let newArr = htmlArr.slice(-5);
  console.log(newArr);
});
