const objectloop = require("./module.obejct.loop.js");
const data = require("./data.js");

function forObject(a, b) {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        let values = [];

        objectloop(values, a);
        objectloop(values, b);

        console.log(values);
        let add = values.reduce((a, b) => {
          return a + b;
        });
        console.log("다 더한값 : ", add);
      }
    }
  } catch (error) {
    console.log(error);
    console.log("안됨요");
  }
}

forObject(data.a, data.b);
