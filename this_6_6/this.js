const THIS_IS_GLOBAL = global;
function first(a, b) {
  let local = 1;
  //first 함수에 local 선언
  this.value = 100;
  //여기에서의 this는 전역 스코프
  // console.log(THIS_IS_GLOBAL);
  // console.log("this의 객체: ", this);
  function inner() {
    // console.log("this : ", this);
    // console.log("this 키 : ", this.value);
    // console.log("전역객체 키 : ", THIS_IS_GLOBAL.value);
    // console.log(local);
    return this.value;
  }
  return inner() + a + b;
}
const firstex = first(1, 2);
console.log(firstex);
