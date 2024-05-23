const rl = require("readline");
const fs = require("fs");

const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("포켓몬스터 이름 작성해주세요 :", function (answer) {
  let data = [];
  pokemonData.forEach((element) => {
    if (answer === element) {
      data.push(element);
      // console.log("포켓몬스터 이름이 존재합니다.");
      readLine.close();
    }
  });
  console.log(data);
  if (data.length === 0) {
    console.log("존재하지 않습니다.");
  } else {
    fs.writeFileSync("./search.json", JSON.stringify(data), "utf-8", (err) => {
      console.log(err);
    });
  }
  readLine.close();
});
