const form = document.querySelector(".feedback-form");
const emailInput = form.elements["email"];
const messageInput = form.elements["message"];
const storageKey = "feedback-form-state";

const saveToLocalStorage = _.throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}, 500);

emailInput.addEventListener("input", saveToLocalStorage);
messageInput.addEventListener("input", saveToLocalStorage);

const savedData = localStorage.getItem(storageKey);
if (savedData) {
  const formData = JSON.parse(savedData);
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  form.reset();
});
