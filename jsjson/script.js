// validation for contact form
const firstName = document.getElementById('f-name').value
const lastName = document.getElementById('l-name').value
const email = document.getElementById('email').value
const msg = document.getElementById('msg').value
const form = document.getElementById('cu-form')
const errorMessage = document.getElementById('error')
const firstNameError = document.getElementById('fname-error')
const lastNameError = document.getElementById('lname-error')
const emailError = document.getElementById('email-error')
const msgError = document.getElementById('msg-error')


form.addEventListener('submit', function(e){
    e.preventDefault();
    if (firstName.value === '' || firstName.value == null){
        firstNameError.innerText = "Please enter your first name"
        errorMessage.innerText = "All fields are required"
    }
    if (lastName.value === '' || lastName.value == null) {
        lastNameError.innerText = "Please enter your last name"
        errorMessage.innerText = 'All fields are required'
    }
    if (email.value === '' || email.value == null || !email.includes('@')) {
        emailError.innerText = "Please enter a valid email address"
        errorMessage.innerText = 'All fields are required'
    }
    if (msg.value === '' || msg.value == null || msg.length < 10) {
        msgError.innerText = 'Please leave a message of at least 10 characters'
        errorMessage.innerText = 'All fields are required'
    }
    })


//var to select where products will be displayed
