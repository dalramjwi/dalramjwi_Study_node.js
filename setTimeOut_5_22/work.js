let counter = 0;
const timer = function () {
  setTimeout(() => {
    console.log(counter + "vw");
    counter++;
    if (counter < 10) {
      timer();
    } else {
      console.log("초 세기가 종료되었습니다.");
    }
  }, 1);
};

timer();
