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
  colorDiv.style.border = "1px solid black";
  box.appendChild(colorDiv);
}
// //?event 삽입
form.addEventListener("input", (event) => {
  event.preventDefault();
  const formData = new URLSearchParams(new FormData(form));
  console.log(new FormData(form));

  fetch("/test", {
    method: "POST",

    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      if (data === "success") {
        div1.style.backgroundColor = "green";
      } else if (data === "fail") {
        div1.style.backgroundColor = "red";
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
box.style.gap = "15vw";
