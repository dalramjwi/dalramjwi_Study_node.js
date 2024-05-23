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
      console.log("!!! 값이 중복됩니다. 종료됩니다. !!!");
      console.log("당신의 점수 : " + score);
      // }
      // readLine.close();
    }
    if (pokemonData.includes(answer)) {
      console.log(answer + " : 존재합니다.");
      answerData.push(answer);
      score++;
      console.log(answerData);
      console.log("당신의 점수 : " + score);
      ques();
    } else if ("종료" === answer) {
      console.log("당신의 점수 : " + score);
      readLine.close();
    } else if (pokemonData.includes(answer) === false) {
      console.log(answer + " : 존재하지 않습니다.");
      readLine.question("포켓몬스터 이름 작성해주세요 :", function (answer) {
        if (pokemonData.includes(answer)) {
          console.log(answer + " : 존재합니다.");
          answerData.push(answer);
          score++;
          console.log(answerData);
          console.log("당신의 점수 : " + score);
          ques();
        } else if ("종료" === answer) {
          console.log(score);
        } else if (pokemonData.includes(answer) === false) {
          console.log(answer + " : 존재하지 않습니다. 실패했습니다.");
          console.log("당신의 점수 : " + score);
          // readLine.close();
        }
      });
    }

    // todo : 1. 답변을 받는다.
    // todo : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
    // todo : 3. 존재한다면 위 지역변수 배열에 추가한다.(append)
    // todo : 4. 존재한다면, score를 1점 추가한다.
    // todo : 5. 존재하지 않는다면, 다시한번 물어본다.
    // todo : 6. "종료" 라고 말한다면, 질문을 종료하고 결과를 보여준다.
    // todo : 7. 결과는 총 "포켓몬스터 score 개"를 작성하였습니다. 라는 로그를 남겨준다.
  });
};
ques();
// readLine.question("포켓몬스터 이름 작성해주세요 :", function (answer) {
//   let answerData = [];

//   pokemonData.forEach((element) => {
//     let score = 0;
//     if (answer === element) {
//       console.log(answer + " : 존재합니다.");
//       answerData.push(element);
//       score++;
//       console.log(answerData);
//       console.log(score);
//     }
//   });

//   // todo : 1. 답변을 받는다.
//   // todo : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
//   // todo : 3. 존재한다면 위 지역변수 배열에 추가한다.(append)
//   // todo : 4. 존재한다면, score를 1점 추가한다.
//   // todo : 5. 존재하지 않는다면, 다시한번 물어본다.
//   // todo : 6. "종료" 라고 말한다면, 질문을 종료하고 결과를 보여준다.
//   // todo : 7. 결과는 총 "포켓몬스터 score 개"를 작성하였습니다. 라는 로그를 남겨준다.
// });
