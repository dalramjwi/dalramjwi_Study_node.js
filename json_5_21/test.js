const htmlMarkup = {
  head: "head",
  body: "body",
};
function test(object) {
  let result = [];
  for (let key in object) {
    result.push(`<${key}> ${object[key]} </${key}>`);
  }
  console.log(result);
  return result.join(" ");
}
test(htmlMarkup);
console.log(test(htmlMarkup));
