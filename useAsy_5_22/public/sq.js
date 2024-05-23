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
}
