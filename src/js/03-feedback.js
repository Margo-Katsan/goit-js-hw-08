import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

const handleInput = event => {
  if (event.currentTarget === null) {
    return;
  }
  localStorage.setItem("feedback-form-state",JSON.stringify({
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value,
  }));
}
updateOutput();
const handleSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  if (form.email.value === '' || form.message.value === '') {
    return alert('Please fill in all the fields!');
  }
  localStorage.removeItem("feedback-form-state");
  form.email.value = "";
  form.message.value = "";
}
function updateOutput() {
  if (localStorage.getItem("feedback-form-state") === null) {
    return;
  }
  form.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email || '';
  form.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message || '';
}

form.addEventListener("input", throttle(handleInput, 500));
form.addEventListener("submit", handleSubmit);
