function formSet(actionPath, method) {
  const form = document.createElement("form");
  form.setAttribute("action", actionPath);
  form.setAttribute("method", method);
  document.body.appendChild(form);
  return console.dir(form);
}
//* 매개변수 작성법
//* formSet("./text", "post");

//? export한 데이터 받아오는 명령어
//? const formSet = require("./formSet");

module.exports = formSet;
