const getElement = (selector) => document.querySelector(selector);
const defaultValue = `Anonymous`;

getElement(`#name-input`).addEventListener("keyup", changeText);

function changeText() {
  getElement(`#name-output`).textContent =
    getElement(`#name-input`).value.length > 0
      ? getElement(`#name-input`).value
      : defaultValue;
}
