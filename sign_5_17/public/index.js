// let base = document.getElementById("base");
// let root = document.getElementById("root");
// let box = document.getElementById("box");
//? 모듈 리스트
// import { memberName } from "./data.js";
import { formSet } from "./formSet.js";

// console.log(memberName);
//? 모듈 실행
const formData = ["./test", "post", root];

const inputData = ["text", "name", "입력하시오"];
// const buttonData = ["submit", "누르시오"];
const inputDataname = ["name", "pw", "pwRe", "email", "phone"];
const placeholder = [
  "나의 이름을 작성하세요",
  "이름과 번호 4자리를 작성해주세요. 공욱재0001",
  "위 비밀번호와 동일하게 작성해주세요",
  "이메일의 주소 양식에 맞게 작성해주세요",
  "핸드폰 번호를 입력해주세요",
];
const form = formSet(
  formData,
  inputData,
  // buttonData,
  inputDataname,
  placeholder
);

//?index.html에 div 박스 생성- 색깔 바뀔 이벤트
for (let i = 0; i < 5; i++) {
  const colorDiv = document.createElement("div");
  colorDiv.id = `div${[i]}`;
  colorDiv.style.width = "10vw";
  colorDiv.style.height = "10vw";
  colorDiv.style.backgroundColor = "red";
  colorDiv.style.border = "1px solid black";
  box.appendChild(colorDiv);
}
//?마지막 div 생성
const lastText = document.createElement("p");
lastText.innerHTML = "작성완료";
add.appendChild(lastText);
const lastDiv = document.createElement("div");
lastDiv.id = "last";
lastDiv.innerHTML = "아직 모든 입력란이 유효하지 않습니다.";
lastDiv.style.width = "85vw";
lastDiv.style.height = "10vw";
lastDiv.style.backgroundColor = "red";
lastDiv.style.border = "1px solid black";
add.appendChild(lastDiv);
// //?event 삽입
form.addEventListener("input", (event) => {
  event.preventDefault();
  const formData = new URLSearchParams(new FormData(form));
  console.log(new FormData(form));

  fetch("/test", {
    method: "POST",

    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.successname == true)
        // if (data === "successname") {
        //   div1.style.backgroundColor = "green";
        // } else if (data === "fail") {
        //   div1.style.backgroundColor = "red";
        // }
        // console.log(data);
        div0.style.backgroundColor = "green";
      if (data.successpw == true) {
        div1.style.backgroundColor = "green";
      }
      if (data.successpwRe == true) {
        div2.style.backgroundColor = "green";
      }
      if (data.successemail == true) {
        div3.style.backgroundColor = "green";
      }
      if (data.successphone == true) {
        div4.style.backgroundColor = "green";
      }
      if (
        data.successname == true &&
        data.successpw == true &&
        data.successpwRe == true &&
        data.successemail == true &&
        data.successphone == true
      ) {
        last.style.backgroundColor = "green";
        last.innerHTML = "모든 입력란이 유효합니다.";
      }
    });
});
//   //?fetch 사용
// let response = await fetch(url);
// // fetch(url)
// //   .then((res) => {
// //     return res.json();
// //   })
// //   .catch((error) => {s
// //     console.log("에러:", error);
// //   });
// if (response.ok) {
//   let json = await response.json();
//   colorDiv.style.backgroundColor = "green";
// } else {
//   colorDiv.style.backgroundColor = "red";
// }
//? 간단한 css
base.style.display = "flex";
base.style.gap = "10vw";
root.style.display = "flex";
form.style.gap = "20vw";
form.style.display = "flex";
form.style.flexDirection = "column";
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.justifyContent = "space-between";
body.style.backgroundColor = "rgba(61, 61, 61, 1)";
body.style.color = "white";
body.style.padding = "8vw";
box.style.padding = "3vw";
