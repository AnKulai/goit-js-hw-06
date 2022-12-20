const getElement = (selector) => document.querySelector(selector);

// Task 1.1

let category = getElement("#categories").children;
console.log(`Number of categories: ${category.length}`);

// Task 1.2

for (let i = 0; i < category.length; i++) {
  console.log(`Category: ${category[i].firstElementChild.textContent}`);
  console.log(`Elements: ${category[i].lastElementChild.children.length}`);
}
