const THIS_IS_GLOBAL = global;
const second = (a, b) => {
  let local = 1;
  this.value = 200;
  // console.log(THIS_IS_GLOBAL);
  // console.log("화살표 함수 this 가리키는 객체 : ", this);
  const inner = () => {
    // console.log("내부 함수 this : ", this);
    // console.log("this 전역 키 ", this.value);
    // console.log("전역 키 ", THIS_IS_GLOBAL.value);
    // console.log(local);
    return this.value;
  };
  return inner() + a + b;
};
const secondex = second(3, 4);
console.log(secondex);
