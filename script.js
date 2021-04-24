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

// // ------------------------------My Code----------------------------------//
//Variables
var special = " !\"/#$%&'()*+,-./:;<=>?@{|}~";
var num = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var Final = "";
var passwordLength = 0;
var password = "";

// Prompt to select password
function generatePassword() {
  alert("Welcome to Jared's Password Generator! Good Luck!!!!");

  ///Created while loop
  while (passwordLength > 128 || passwordLength < 8) {
    passwordLength = prompt(
      "Your password should be between 8 to 128 characters or its not gonna work."
    );
    // var passLengthChecker = Number(passwordLength);
    if (passwordLength > 128 || passwordLength < 8) {
      alert("WRRRRRROOOONNNNG!");
    }
  }

  special = confirm(
    "Would you like these special characters?  !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  );
  num = confirm("Would you like numeric characters 0-9?");
  lower = confirm("Would you like lowercase characters?");
  upper = confirm("Would you like uppercase characters?");

  return generatePass();
}
var generateFinal = function () {
  if (special === true) {
    Final += special;
  }
  if (num === true) {
    Final += num;
  }
  if (lower === true) {
    Final += lower;
  }
  if (upper === true) {
    Final += upper;
  }
  return Final;
};

// Function to generate a random password and place password

var generatePass = function () {
  password = "";

  var charList = generateFinal();
  for (var i = 0; i < passwordLength; i++) {
    password += charList[Math.floor(Math.random() * charList.length)];
  }
  return password;
};
// Button variables
