setTimeout(() => {
  console.log("1. 너구리 날아");
  a();
}, 1000);

function a() {
  setTimeout(() => {
    console.log("2. 고양이 날아?");
  }, 1000);
}
