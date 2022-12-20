const getElement = (selector) => document.querySelector(selector);
let counterValue = 0;

(() => {
  const action = {
    increment: document.querySelector("[data-action=increment]"),
    decrement: document.querySelector("[data-action=decrement]"),
  };

  action.increment.addEventListener("click", incrementNumber);
  action.decrement.addEventListener("click", decrementNumber);

  function incrementNumber() {
    counterValue++;
    getElement(`#value`).textContent = counterValue;
  }
  function decrementNumber() {
    counterValue--;
    getElement(`#value`).textContent = counterValue;
  }
})();
