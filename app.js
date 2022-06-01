"use strict";

const inputEmail = document.querySelector(".input-email");
const formBtn = document.querySelector(".form-btn");
const emailError = document.querySelector(".email-error");

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userEmail = inputEmail.value;

  // Check if email is valid
  if (!userEmail) {
    inputEmail.classList.add("email-error-border");
    emailError.textContent =
      "Whoops! It looks like you forgot to add your email";
    return;
  } else if (!validateEmail(userEmail)) {
    inputEmail.classList.add("email-error-border");
    emailError.textContent = "Please provide a valid email address";
    return;
  }
  // Check if user entered an email

  // Submit form and clear inputs & errors
  inputEmail.value = "";
  inputEmail.classList.remove("email-error-border");
  emailError.textContent = "";
});
