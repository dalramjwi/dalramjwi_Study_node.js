const fs = require("fs");
const calendarSet = require("./calendarSet");

const test = fs.writeFile(
  `${calendarSet()}-test.txt`,
  "hello안녕",
  "utf-8",
  function (err) {
    if (err) {
      console.log("wrtieFile err");
      console.log("에러 내용 :", err);
    }
    console.log("saved");
  }
);
