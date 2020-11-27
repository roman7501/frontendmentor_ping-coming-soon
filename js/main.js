const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form["email"].value;
  if (!isValid(email)) {
    addErrorTo("email", "Please provide a valid email adress");
  } else {
    removeErrorFrom("email", "Please provide a valid email adress");
  }
  console.log(email);
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
