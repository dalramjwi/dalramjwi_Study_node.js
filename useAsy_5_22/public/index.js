const root = document.getElementById("root");
const btn = document.getElementById("btn");
let intervalHandler = 0;
btn.addEventListener("click", () => {
  // console.log(1);
  // root.style.position = "relative";
  // root.style.left = "-500px";

  let timer = setInterval(() => {
    root.style.left = `-${intervalHandler}px`;
    console.log(intervalHandler);
    intervalHandler++;
    if (intervalHandler > 100) {
      clearInterval(timer);
    }
  }, 1000);
});
