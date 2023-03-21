const inputREF = document.querySelector("#validation-input");
const dataLength = inputREF.dataset.length;

inputREF.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLength = inputREF.value.length;
  if (dataLength >= inputLength) {
    inputREF.classList.add("valid");
    //   inputREF.classList.remove("invalid");
  } else {
    inputREF.classList.remove("valid");
    inputREF.classList.add("invalid");
  }
}
