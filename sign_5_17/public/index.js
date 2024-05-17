//data 모듈의 형태로 받아옴, console로 확인함
// const loadData = require("./loadData");
// console.log(loadData("./data.json"));
//form 모듈의 형태로 받아옴, console로 확인 안됨 - create이기에 직접 html로 확인해야함
// const formSet = require("./formSet");
// formSet("./text", "post");
import { memberName } from "./data copy";
import { loadData } from "./loadData";

console.log(loadData);
console.log(memberName);
