const rl = require("readline");
const fs = require("fs");

const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let score = 0;
let answerData = [];
let checkData = 0;

const ques = () => {
  readLine.question("포켓몬스터 이름 작성해주세요 :", function (answer) {
    if (answerData.includes(answer)) {
      // checkData = 1;
      // if (checkData === 1) {
      console.log("!!! 값이 중복됩니다. !!!");
      // console.log("당신의 점수 : " + score);
      answerData.pop();
      // console.log(answerData);
      score--;
      ques();
      // }
      // readLine.close();
    }
    if (pokemonData.includes(answer)) {
      console.log(answer + " : 존재합니다.");
      answerData.push(answer);
      score++;
      // console.log(answerData);
      // console.log("당신의 점수 : " + score);
      ques();
    } else if ("종료" === answer) {
      console.log("당신의 점수 : " + score);
      readLine.close();
    } else if (pokemonData.includes(answer) === false) {
      console.log(
        answer + " : 존재하지 않습니다. 한번의 기회가 더 주어집니다."
      );
      readLine.question("포켓몬스터 이름 작성해주세요 :", function (answer) {
        if (pokemonData.includes(answer)) {
          console.log(answer + " : 존재합니다.");
          answerData.push(answer);
          score++;
          // console.log(answerData);
          // console.log("당신의 점수 : " + score);
          ques();
        } else if ("종료" === answer) {
          console.log(score);
        } else if (pokemonData.includes(answer) === false) {
          console.log(answer + " : 존재하지 않습니다. 실패했습니다.");
          // console.log("당신의 점수 : " + score);
          // readLine.close();
        }
      });
    }
  });
};
ques();
