function showErrorMessage(errorId, message) {
    const errorField = document.getElementById(errorId + "Error");
    const inputField = document.getElementById(errorId);

    errorField.textContent = message;
    errorField.style.display = "block";
    inputField.style.borderColor = "red";
}

function clearErrorMessages() {
    const errorFields = document.querySelectorAll(".error-message");
    const inputFields = document.querySelectorAll("input");

    errorFields.forEach((errorField) => {
        errorField.textContent = "";
        errorField.style.display = "none";
    });
}

function signup() {
    clearErrorMessages();

    // Validate First Name
    const firstNameInput = document.querySelector("#firstname");
    const firstName = firstNameInput.value;

    let firstNameRegex = /^[a-zA-Z]+$/;

    if (firstNameRegex.test(firstName)) {
        console.log("Valid First Name");
    } else {
        console.log("Invalid First Name");
        showErrorMessage("firstname", "Invalid first name");
    }

    const lastNameInput = document.querySelector("#lastname");
    const lastName = lastNameInput.value;

    let lastNameRegex = /^[a-zA-Z]+$/;

    if (lastNameRegex.test(lastName)) {
        console.log("Valid Last Name");
    } else {
        console.log("Invalid Last Name");
        showErrorMessage("lastname", "Invalid last name");
    }

    const emailInput = document.querySelector("#email");
    const email = emailInput.value;

    let validEmail = /\S+@\S+\.\S+/;

    if (validEmail.test(email)) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
        showErrorMessage("email", "Invalid email");
    }

    const phoneNumberInput = document.querySelector("#phonenumber");
    const phoneNumber = phoneNumberInput.value;
    let validPhoneNumber = /^\d{10}$/;

    if (validPhoneNumber.test(phoneNumber)) {
        console.log("Valid Phone Number");
    } else {
        console.log("Invalid Phone Number");
        showErrorMessage("phonenumber", "Invalid phone number");
    }

    const passwordInput = document.querySelector("#password");
    const password = passwordInput.value;

    let validPassword = /.{6,}/; 

    if (validPassword.test(password)) {
        console.log("Valid Password");
    } else {
        console.log("Invalid Password");
        showErrorMessage("password", "Invalid password (at least 6 characters)");
    }

    const confirmPasswordInput = document.querySelector("#confirmpassword");
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword === password) {
        console.log("Passwords Match");
    } else {
        console.log("Passwords Do Not Match");
        showErrorMessage("confirmpassword", "Passwords do not match");
    }
}
