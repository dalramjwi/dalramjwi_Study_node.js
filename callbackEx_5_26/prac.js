const menu = document.getElementById("menu");
const toggleButton = document.getElementById("menu-toggle");
const menuWidth = "250";
const slideStep = "10";
const intervalTime = 16;
const closedPosition = -menuWidth;
const openPositon = 0;
let isOpen = false;
let interval;
function slideMenu(open) {
  let currenPosition = parseInt(menu.style.left, 10);
  let targetPosition;
  let step;
  if (open) {
    targetPosition = openPositon;
    step = slideStep;
  } else {
    targetPosition = closedPosition;
    step = -slideStep;
  }
  // clearInterval(interval);
  interval = setInterval(() => {
    if (open === true) {
      if (currenPosition >= targetPosition) {
        clearInterval(interval);
        menu.style.left = targetPosition + "px";
        return;
      }
    } else {
      if (currenPosition <= targetPosition) {
        clearInterval(interval);
        menu.style.left = targetPosition + "px";
        return;
      }
    }
    currenPosition += step;
    menu.style.left = currenPosition + "px";
  }, intervalTime);
}
toggleButton.addEventListener("click", () => {
  if (isOpen == true) {
    isOpen = false;
    slideMenu(false);
  } else {
    isOpen = true;
    slideMenu = true;
  }
});
