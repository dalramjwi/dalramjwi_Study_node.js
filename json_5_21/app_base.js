const fs = require("fs");
const calendarSet = require("./calendarSet");
const testJson = {
  name: "김달",
  age: "unknown",
  hobby: "산책",
  favorite: "잠",
};
let convertJson = JSON.stringify(testJson, null, 2);

const test = fs.writeFile(
  `${calendarSet()}-test1.json`,
  convertJson,
  "utf-8",
  function (err) {
    if (err) {
      console.log("wrtieFile err");
      console.log("에러 내용 :", err);
    }
    console.log("saved");
  }
);
