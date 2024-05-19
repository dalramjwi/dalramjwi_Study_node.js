import { inputSet } from "./inputSet.js";
// import { buttonSet } from "./_buttonSet.js";

const formData = ["actionPath", "method", "path"];
const inputData = ["type", "name", "placeholder"];
const buttonData = ["submit", "누르시오"];

const labelArr = [
  "나의 이름",
  "비밀번호",
  "비밀번호 확인",
  "이메일 주소",
  "핸드폰 번호",
];

export const formSet = function formSet(
  formData,
  inputData,
  // buttonData,
  inputDataname,
  placeholder
) {
  const form = document.createElement("form");
  form.setAttribute("action", formData[0]);
  form.setAttribute("method", formData[1]);
  for (let i = 0; i < 5; i++) {
    const label = document.createElement("label");
    label.innerText = labelArr[i];
    form.appendChild(label);
    const input = inputSet(inputData[0], inputDataname[i], placeholder[i]);
    input.id = `input${[i]}`;
    label.appendChild(input);
  }
  // form.appendChild(buttonSet(buttonData[0], buttonData[1]));
  formData[2].appendChild(form);
  return form;
};
//* 매개변수 작성법
//* formSet("./text", "post", path);

//? export한 데이터 받아오는 명령어
//? import { formSet } from "./formSet.js";
