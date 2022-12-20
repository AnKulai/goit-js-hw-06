const colorControllerBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

colorControllerBtn.addEventListener(`click`, changeBodyColor);

function changeBodyColor () {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  document.querySelector(`.color`).textContent = `${getRandomHexColor()}`;
}