const root = document.getElementById("root");
const dance = document.getElementById("dance");
const text = document.getElementById("text");
root.addEventListener("click", rotate());
let intervalHandler = 0;
function rotate() {
  setInterval(() => {
    root.style.rotate = `${intervalHandler}deg`;
    // console.log(intervalHandler);
    intervalHandler++;
  }, 10);
}
const bimg = document.createElement("img");
dance.appendChild(bimg);
dance.style.width = "285px";
dance.style.height = "265px";
dance.style.zIndex = "2";
dance.style.position = "relative";
text.style.position = "relative";
bimg.style.position = "relative";
bimg.style.width = "38vw";
bimg.style.top = "31vw";
bimg.style.left = "30vw";
text.style.left = "28vw";
text.style.top = "24vw";
text.style.border = "none";
let second = 100;
let danceCount = 1;
text.addEventListener("click", imgchange);
function imgchange() {
  danceCount = 1;
  setInterval(() => {
    if (danceCount < 10) {
      bimg.src = `./img/00${danceCount}.png`;
    } else if (danceCount < 62) {
      bimg.src = `./img/0${danceCount}.png`;
      // dance.style.right = `${danceCount}0px`;
      //춤을 추며 나감
    } else {
      clearInterval("imgchange");
      text.innerHTML = "faster?";
      danceCount = 1;
      imgchange();
    }
    console.log(danceCount);
    danceCount++;
  }, second);

  // let danceCount = 1;
  // setInterval(() => {
  //   if (danceCount < 10) {
  //     bimg.src = `./img/00${danceCount}.png`;
  //   } else if (danceCount < 62) {
  //     bimg.src = `./img/0${danceCount}.png`;
  //     // dance.style.right = `${danceCount}0px`;
  //     //춤을 추며 나감
  //   } else {
  //     clearInterval("imgchange");
  //   }
  //   console.log(danceCount);
  //   danceCount++;
  // }, 100);
}
// function imgchange() {
//   setInterval(() => {
//     if (danceCount < 10) {
//       bimg.src = `./img/00${danceCount}.png`;
//     } else if (danceCount < 62) {
//       bimg.src = `./img/0${danceCount}.png`;
//       // dance.style.right = `${danceCount}0px`;
//       //춤을 추며 나감
//     } else {
//       clearInterval("imgchange");
//       text.innerHTML = "try again?";
//     }
//     console.log(danceCount);
//     danceCount++;
//   }, 100);

//   let danceCount = 1;
//   setInterval(() => {
//     if (danceCount < 10) {
//       bimg.src = `./img/00${danceCount}.png`;
//     } else if (danceCount < 62) {
//       bimg.src = `./img/0${danceCount}.png`;
//       // dance.style.right = `${danceCount}0px`;
//       //춤을 추며 나감
//     } else {
//       clearInterval("imgchange");
//     }
//     console.log(danceCount);
//     danceCount++;
//   }, 100);
// }
// text.addEventListener("click", restart);
// function restart() {

// }
// bimg.src = "./img/001.png";
// for (let i = 1; i < 63; i++) {
//   if (i < 10) {
//     img.src = `./img/00${i}.png`;
//   } else {
//     img.src = `./img/0${i}.png`;
//   }
// }
