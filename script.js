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

// // ------------My Code-----------//

var special = " !\"/#$%&'()*+,-./:;<=>?@{|}~";
var num = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var Final = "";

// Prompt to select password

alert("Welcome to Jared's Password Generator! Good Luck!!!!");
var passwordLength = prompt(
  "Your password should be between 8 to 128 characters or its not gonna work."
);
var passLengthChecker = Number(passwordLength);
var special = confirm(
  "Would you like these special characters?  !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
);
var Num = confirm("Would you like numeric characters 0-9?");
var lower = confirm("Would you like lowercase characters?");
var upper = confirm("Would you like uppercase characters?");

// Button variables

var generateBtn = document.querySelector("#gen");
var copyBtn = document.querySelector("#copy");
var passwordBox = document.querySelector("#pass-final");

// function check to see if password is between 8-128

// var choseLengthCorrectly = function () {
//   alert("You must select a password length between 8 and 128");
//   passwordLength = prompt(
//     "How many characters would you like your password to be? Must be between 8 and 128."
//   );
//   passLengthChecker = Number(passwordLength);
// };

// function to check to make sure at least one type of character is selected

var choseCharList = function () {
  alert("You must select at least one of the 4 character types.");
  special = confirm("Would you like special characters?");
  Num = confirm("Would you like numeric characters?");
  lower = confirm("Would you like lowercase characters?");
  upper = confirm("Would you like uppercase characters?");
};
// function to make final character list to select from for password generation and then returns the completed list

var generateFinalCharList = function () {
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

// Function to generate a random password and place password into password div

var generatePass = function () {
  // event.preventDefault()
  var password = "";
  var charList = generateFinalCharList();
  for (var i = 0; i < passwordLength; i++) {
    pass += charList[Math.floor(Math.random() * charList.length)];
  }
  passwordBox.textContent = pass;
};
