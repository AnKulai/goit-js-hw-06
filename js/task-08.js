const submitButton = document.querySelector(`.login-form`).lastElementChild;
let passExp = /^[-._a-zA-Z0-9]{1,16}$/;
let mailExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let resultValidation;
let emailField;
let passwordField;

submitButton.addEventListener("click", sendForm);

function sendForm() {
  event.preventDefault();
  emailField = document.querySelector(`.login-form`).email.value;
  passwordField = document.querySelector(`.login-form`).password.value;
  if (checkValidation(emailField, passwordField)) {
    let resultObject = {
      email: emailField,
      password: passwordField,
    };
    console.log(resultObject);
    document.querySelector(`.login-form`).reset();
    return resultObject;
  } 
}

checkValidation = (emailField, passwordField) => {
  let validationArray = [];
  if (!mailExp.test(emailField)) {
    validationArray.push("email");
  }
  if (!passExp.test(passwordField)) {
    validationArray.push(`password`);
  }
  if (validationArray.length != 0) {
    alert(`Check the next field: ${validationArray}`);
    validationArray = [];
    return false
  } else {
    return true
  }


  //    && mailExp.test(passwordField) ? true : false;
};

