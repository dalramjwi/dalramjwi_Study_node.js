function objectloop(array, object) {
  for (let key in object) {
    array.push(object[key]);
  }
}
module.exports = objectloop;
