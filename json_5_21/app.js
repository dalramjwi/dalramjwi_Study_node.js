const fs = require("fs");
const calendarSet = require("./calendarSet");
const htmlMarkup = {
  head: {
    title: "prac",
  },
  body: {
    header: "menu",
    main: "main",
    footer: "하단",
  },
};
let convertJson = JSON.stringify(htmlMarkup, null, 2);

const test = fs.writeFile(
  `${calendarSet()}-test2.json`,
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
