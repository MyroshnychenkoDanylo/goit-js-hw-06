const allItemREF = document.querySelectorAll(".item");
const lengthOfAllItemREF = allItemREF.length;

console.log(`Number of categories: ${lengthOfAllItemREF}`);

const itemREF = document.querySelector("ul#categories .item");
console.log(itemREF);

allItemREF.forEach((el) =>
  console.log(`Category: ${el.firstElementChild.textContent}
  Elements: ${el.lastElementChild.childElementCount}`)
);
