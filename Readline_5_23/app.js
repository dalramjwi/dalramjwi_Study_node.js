const rl = require("readline");
// console.dir(rl);
let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
};
const readLine = rl.createInterface(inOut);
// console.dir(readLine);
readLine.question("좋아하는 게 뭐야? ", (answer) => {
  if (answer === "고양이") {
    console.log("맞아");
    readLine.question("또 뭘 좋아해?", (answer) => {
      setTimeout(function () {
        console.log(`${answer}라고? 그래`);
        readLine.close();
      }, 1000);
    });
  } else {
    console.log(`틀렸어`);
    readLine.close();
  }
});
