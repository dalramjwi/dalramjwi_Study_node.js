export const loadData = function loadData(dataPath) {
  const fs = require("fs");
  try {
    if (typeof dataPath === "string") {
      const dataValue = fs.readFileSync(dataPath, "utf8");
      return JSON.parse(dataValue);
    }
  } catch (error) {
    console.log("error exist");
  }
};

//* 매개변수 dataPath 작성법
//* loadData("data.json");

//? export한 데이터 받아오는 명령어
//? const loadData = require("./loadData");

// module.exports = loadData;
