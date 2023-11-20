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
  document.getElementById("myButton").onclick = function () {
    location.href = "sinup.html";
  };
  
  function login() {
    clearErrorMessages();
  
    const emailInput = document.querySelector("#email");
    const email = emailInput.value;
  
    var validEmail = "firstname@gmail.com";
  
    if (validEmail === email) {
      console.log("Valid email");
    } else {
      console.log("Email is Invalid");
      showErrorMessage("email", "!Invalid email");
    }
  
    const passwordInput = document.querySelector("#password");
    const password = passwordInput.value;
  
    var validPassword = "12345";
  
    if (validPassword === password) {
      console.log("Valid Password");
    } else {
      console.log("Password is Invalid");
      showErrorMessage("password", "Invalid password");
    }
  }
  