import { inputSet } from "./inputSet.js";
export const formSet = function formSet(actionPath, method, path) {
  const form = document.createElement("form");
  form.setAttribute("action", actionPath);
  form.setAttribute("method", method);
  form.appendChild(inputSet("/test", "name", "입력하시오"));
  path.appendChild(form);
  return form;
};
//* 매개변수 작성법
//* formSet("./text", "post", path);

//? export한 데이터 받아오는 명령어
//? import { formSet } from "./formSet.js";
