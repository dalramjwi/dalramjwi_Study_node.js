const rl = require("readline");
// console.dir(rl);

let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
};

const readLine = rl.createInterface(inOut);

readLine.question(
  "만들고 싶은 HTML 파일이름을 작성해주세요. : ",
  function (answer) {
    let data = answer;

    const fs = require("fs");
    fs.writeFileSync(data + ".html", "hello", "utf-8", function (error) {
      if (error === true) {
        console.log("파일 생성 실패");
      } else {
        console.log("파일 생성 성공");
      }
      readLine.close();
    });
  }
);
