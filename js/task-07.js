const controlerREF = document.querySelector("#font-size-control");
const textREF = document.querySelector("#text");

controlerREF.addEventListener("input", onControlerInput);

function onControlerInput() {
  textREF.style.fontSize = `${controlerREF.value}px`;
}
