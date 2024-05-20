function forObject(a, b) {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        let values = [];
        for (let key in a) {
          values[0] = a[key];
        }
        for (let key in b) {
          values[1] = b[key];
        }
        console.log(values);
        let add = values[0] + values[1];
        console.log("다 더한 값:", add);
      }
    }
  } catch (error) {
    console.log(error);
    console.log("오류");
  }
}

const a = { first: 1 };
const b = { first: 2 };

forObject(a, b);
