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

// ------------My Code-----------//

// Assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/+=";
var othercharacters = "";

//do random generation here and return the final password in the end
function generatePassword() {
  alert("Need a Password!!!!!!!!");
  var passwordLength = prompt("How many characters long?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    confirmPassword("lowercase", lowerCaseLetters);
  } else {
    alert("error, password must be between 8 and 128 characters long.");
    generatePassword();
  }
}
function continuePassword(type, arr) {
    var lowerCaseConfirm = confirm("Wold you like " + type + letters in your password?);s

if (lowercaseConfirm == true) {
    // Array.prototype.push.apply(finalPassword, lowerCaseLetters);
    for (var i of arr) {


        finalPassword.push(i);

    }
    return;
    );
} else {
    alert("nicetry");
    return;

}

generatePassword();
console.log(finalpassword);

generateBtn.addEventListener("click", writePassword);

