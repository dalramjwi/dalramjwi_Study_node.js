function a(a, b) {
  return a + b;
}
function one(a, b, callback) {
  return callback(a, b);
}
// let testOne = one(1, 2, a);
// console.log(testOne);
function two(a, b, callback) {
  return callback(a, b);
}
let testTwo = two(2, 3, function (a, b) {
  return a - b;
});
// console.log(testTwo);
function anotherFunc(a, b) {
  return a + b;
}
function three(a, b) {
  return anotherFunc(a, b);
}

const testThree = three(3, 4);
console.log(testThree);
