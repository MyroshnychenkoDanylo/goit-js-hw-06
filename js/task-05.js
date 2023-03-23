const inputREF = document.querySelector("#name-input");
const nameLabelREF = document.querySelector("#name-output");

inputREF.addEventListener("focus", onInputFocus);
inputREF.addEventListener("blur", onInputBlur);

inputREF.addEventListener("input", onInputChange);

function onInputFocus() {
  console.log("Инпут получил фокус");
}

function onInputBlur() {
  console.log("потерял фокус");
}

function onInputChange(event) {
  if (event.currentTarget.value !== "") {
    nameLabelREF.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
  } else nameLabelREF.textContent = "Anonymous";
}
