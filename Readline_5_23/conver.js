const rl = require("readline");
// console.dir(rl);
let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
};
const readLine = rl.createInterface(inOut);
// console.dir(readLine);
readLine.question("안녕? 넌 이름이 뭐야? ", (answer) => {
  if (typeof answer === "string") {
    console.log("그렇구나");
    readLine.question("또 뭘 좋아해?", (answer) => {
      setTimeout(function () {
        console.log(`${answer}라고? 그래`);
        setTimeout(function () {
          console.log("음..");
          console.log("알았어");
        }, 1000);

        readLine.close();
      }, 1000);
    });
  } else {
    console.log(`틀렸어`);
    readLine.close();
  }
});
