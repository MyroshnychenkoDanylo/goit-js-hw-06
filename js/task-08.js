const formREF = document.querySelector(".login-form");

formREF.addEventListener("submit", onFromSubmit);

function onFromSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  console.log(formElements);
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const formData = { email, password };
    alert("Супер");
    formREF.reset();
    console.log(formData);
  }
}
