const getElement = (selector) => document.querySelector(selector);
let listElement = [];

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i++) {
  listElement[i] = document.createElement(`li`);
  listElement[i].textContent = ingredients[i];
  listElement[i].classList.add(`item`);
}

 getElement("#ingredients").append(...listElement);