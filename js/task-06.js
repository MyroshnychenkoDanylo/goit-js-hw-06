const inputREF = document.querySelector("input");

inputREF.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const total = event.currentTarget.value.length;
  if (Number(inputREF.dataset.length) !== total) {
    inputREF.classList.add("invalid");
  } else {
    inputREF.classList.remove("invalid");
    inputREF.classList.add("valid");
  }
}
