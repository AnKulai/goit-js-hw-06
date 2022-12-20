const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
let inputRange = document.querySelector(`#controls`).firstElementChild;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBtn.addEventListener(`click`, createBoxes);
destroyBtn.addEventListener(`click`, destroyBoxes);

function createBoxes() {
  let amount = inputRange.value;
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML(
      `afterbegin`,
      `<div style="width: ${boxSize}px; height:${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
    );
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
