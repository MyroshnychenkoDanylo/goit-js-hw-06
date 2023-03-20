const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulREF = document.querySelector("ul#ingredients");

const ingredientsArr = ingredients.map((ingredient) => {
  const liREF = document.createElement("li");
  liREF.textContent = ingredient;
  liREF.className = "item";

  return liREF;
});
ulREF.append(...ingredientsArr);

console.log(ulREF);
