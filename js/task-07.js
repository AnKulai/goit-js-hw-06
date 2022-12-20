const fontSizeController = document.querySelector(`#font-size-control`);
const targetText = document.querySelector(`#text`);

fontSizeController.addEventListener("mousedown", changeSize);

function changeSize() {
  pressTimer = setInterval(function () {
   targetText.style.fontSize = `${fontSizeController.value}px`;
  }, 100);
}
