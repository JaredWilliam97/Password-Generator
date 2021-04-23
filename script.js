// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//------------My Code-----------//

var specialCharacters = "!@#$%^&*()";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxys";
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  password;
}

var password = prompt("Lets make a password");

var pwdlength = getPwdLength();
if (pwdLength === "cancel") return null;
