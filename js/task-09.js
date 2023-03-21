function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const spanREF = document.querySelector(".color");
const bodyREF = document.body;

bodyREF.style.backgroundColor = changeBtn.addEventListener(
  "click",
  changeColor
);

function changeColor() {
  bodyREF.style.backgroundColor = getRandomHexColor();
  spanREF.textContent = bodyREF.style.backgroundColor;
}
