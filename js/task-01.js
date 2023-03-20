const allItemREF = document.querySelectorAll(".item");
const lengthOfAllItemREF = allItemREF.length;

console.log(`Number of categories: ${lengthOfAllItemREF}`);

// const animalsREF = document.querySelectorAll(".item.h2");
// console.log(allItemREF[0]);
// // console.log(animalsREF);

const itemREF = document.querySelector("ul#categories .item");
console.log(itemREF);

allItemREF.forEach((el) =>
  console.log(`Category: ${el.firstElementChild.textContent}
  Elements: ${el.lastElementChild.childElementCount}`)
);
