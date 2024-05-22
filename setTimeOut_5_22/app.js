let fromData = {
  a: "1. 꽁꽁 얼어붙은",
  b: "2. 대전천 위로",
  c: "3. 고양이가 날고 있다.",
};
function a() {
  console.log(fromData.a);
}
function b() {
  console.log(fromData.b);
}
function c() {
  console.log(fromData.c);
}
setTimeout(function () {
  console.log("고양이 난다");
}, 3000);

c();
a();
b();
