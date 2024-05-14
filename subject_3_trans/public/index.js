//할당 및 요소 생성
const root = document.getElementById("root");
const sectionOne = document.createElement("section");
const sectionTwo = document.createElement("section");

root.appendChild(sectionOne);
root.appendChild(sectionTwo);
const menuColorArray = [
  "rgba(217, 217, 217, 1)",
  "rgba(189, 222, 134, 1)",
  "rgba(134, 222, 169, 1)",
  "rgba(134, 169, 222, 1)",
  "rgba(173, 134, 222, 1)",
];
let menuArr = ["탕구리", "우파", "아차모", "모부기", "파이리"];
const namelist = ["cubone", "wooper", "torchic", "turtwig", "charmander"];

//sectionOne의 메뉴 생성

let menuLink = [];

for (let i = 0; i < menuArr.length; i++) {
  menuLink.push(`<a href="./index${i}.html">${menuArr[i]}</a>`);
}

for (let i = 0; i < menuArr.length; i++) {
  const menu = document.createElement("div");
  if (i > 0) {
    menu.innerHTML = `${menuLink[i]}`;
  } else {
    menu.innerHTML = `<a href="./index.html">${menuArr[i]}</a>`;
  }

  sectionOne.appendChild(menu);
}
//sectionOne의 메뉴 CSS 기본
sectionOne.style.display = "flex";
//sectionTwo 골격 생성
const text = document.createElement("p");
sectionTwo.appendChild(text);
var url = document.location.href;
console.log(url);
for (let i = 0; i < menuArr.length; i++) {
  if (url === "http://localhost:8080/index.html") {
    text.textContent = menuArr[0];
    text.style.backgroundColor = menuColorArray[0];
  } else if (url === `http://localhost:8080/index${i}.html`) {
    text.textContent = menuArr[i];
    text.style.backgroundColor = menuColorArray[i];
  }
}
console.log(text);
//img gif 배열 생성
let imgLink = [];
for (let i = 0; i < menuArr.length; i++) {
  imgLink.push(
    `http://img.pokemondb.net/sprites/black-white/anim/normal/${namelist[i]}.gif`
  );
}
const img = document.createElement("img");
for (let i = 0; i < menuArr.length; i++) {
  if (url === "http://localhost:8080/index.html") {
    img.src = `${imgLink[0]}`;
  }
  if (url === `http://localhost:8080/index${i}.html`) {
    img.src = `${imgLink[i]}`;
  }
  sectionTwo.appendChild(img);
}
//img background 배열
const background = document.getElementsByTagName("body");
for (let i = 0; i < menuArr.length; i++) {
  if (url === "http://localhost:8080/index.html") {
    root.style.backgroundImage = "./img/backG.png";
  }
  // if (url === `http://localhost:8080/index${i}.html`) {
  //   background.style.backgroundImage = `url(${imgLink[0]})`;
  // }
}
//sectionOne css
console.dir(sectionOne);
sectionOne.style.justifyContent = "space-between";

for (let i = 0; i < menuArr.length; i++) {
  sectionOne.children[i].style.backgroundColor = menuColorArray[i];
  sectionOne.children[i].children[0].style.textDecoration = "none";
}
