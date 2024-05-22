let handle = {
  interval: 100,
  danceCount: 1,
};

let text = document.querySelector();

function imgchange() {
  // todo : clearInterval은 setInterval을 식별한 후에, clearInterval에 인자로 넣어줘야함

  let cycle = setInterval(() => {
    if (handle.danceCount < 10) {
      bimg.src = `./img/00${handle.danceCount}.png`;
    } else if (handle.danceCount < somdirectory.length) {
      bimg.src = `./img/0${handle.danceCount}.png`;
    } else {
      clearInterval(cycle);
      text.innerHTML = "faster?";
      handle.danceCount = 1;
      // imgchange();
    }
  }, handle.interval);
}

text.addEventListener("click", imgchange);
