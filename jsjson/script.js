//get value from form inputs
const firstName = document.getElementById("f-name").value;
const lastName = document.getElementById("l-name").value;
const email = document.getElementById("email").value;
const msg = document.getElementById("msg").value;
//get form element
const form = document.getElementById("cu-form"); 
//get error <p> from HTML
const errorMessage = document.getElementById("error");
const firstNameError = document.getElementById("fname-error");
const lastNameError = document.getElementById("lname-error")
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("msg-error");


form.addEventListener("submit", function (e) {
  //prevent page from refreshing or submitting if
  e.preventDefault();
  // validation for contact form
  if (firstName.value === "" || firstName.value == null) {
    firstNameError.innerText = "Please enter your first name";
    errorMessage.innerText = "All fields are required";
  }
  if (lastName.value === "" || lastName.value == null) {
    lastNameError.innerText = "Please enter your last name";
    errorMessage.innerText = "All fields are required";
  }
  if (email.value === "" || email.value == null || !email.includes("@")) {
    emailError.innerText = "Please enter a valid email address";
    errorMessage.innerText = "All fields are required";
  }
  if (msg.value === "" || msg.value == null || msg.length < 10) {
    msgError.innerText = "Please leave a message of at least 10 characters";
    errorMessage.innerText = "All fields are required";
  }
  //add if statement = reload method if they are all good
});
