// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // // ------------------------------My Code----------------------------------//
// //Variables
// var special = " !\"/#$%&'()*+,-./:;<=>?@{|}~";
// var num = "0123456789";
// var lower = "abcdefghijklmnopqrstuvwxyz";
// var upper = lower.toUpperCase();
// var Final = "";
// var passwordLength = 0;
// var password = "";

// // Prompt to select password
// function generatePassword() {
//   alert("Welcome to Jared's Password Generator! Good Luck!!!!");

//   ///Created while loop
//   while (passwordLength > 128 || passwordLength < 8) {
//     passwordLength = prompt(
//       "Your password should be between 8 to 128 characters or its not gonna work."
//     );
//     // var passLengthChecker = Number(passwordLength);
//     if (passwordLength > 128 || passwordLength < 8) {
//       alert("WRRRRRROOOONNNNG!");
//     }
//   }

//   special = confirm(
//     "Would you like these special characters?  !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
//   );
//   num = confirm("Would you like numeric characters 0-9?");
//   lower = confirm("Would you like lowercase characters?");
//   upper = confirm("Would you like uppercase characters?");

//   return generatePass();
// }
// var generateFinal = function () {
//   if (special === true) {
//     Final += special;
//   }
//   if (num === true) {
//     Final += num;
//   }
//   if (lower === true) {
//     Final += lower;
//   }
//   if (upper === true) {
//     Final += upper;
//   }
//   return Final;
// };

// // Function to generate a random password and place password

// var generatePass = function () {
//   password = "";

//   var charList = generateFinal();
//   for (var i = 0; i < passwordLength; i++) {
//     password += charList[Math.floor(Math.random() * charList.length)];
//   }
//   return password;
// };
// Button variables

var modal = document.getElementById("passwordSpecs");
var generateBtn = document.querySelector("#generate");
var createBtn = document.querySelector("#makePassword");
var lengthSlider = document.getElementById("length");
var lengthValue = document.getElementById("value");

var characters = [
  document.querySelector("#lowercase"),
  document.querySelector("#uppercase"),
  document.querySelector("#numbers"),
  document.querySelector("#special"),
];
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
lengthSlider.oninput = function () {
  lengthValue.innerHTML = this.value;
};
// Add event listener to generate button
generateBtn.addEventListener("click", displayModal);
createBtn.addEventListener("click", writePassword);
// show modal on click
function displayModal() {
  modal.style.display = "block";
}

// close modal on click off
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// functions
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // check to see if any character checkbox is checked
  if (!characters.every(allCheckedFalse)) {
    let usableChars = "";
    characters.forEach((set, index) => {
      // loop through all checkboxes
      if (set.checked == true) {
        // if checkbox is checked
        switch (index) {
          case 0: {
            // lowercase checkbox checked
            usableChars += lowerChar; // add lowercase characters to the usable charaters string
            break;
          }
          case 1: {
            // uppercase check box checked
            usableChars += upperChar; //add uppercase characters to the usable charaters string
            break;
          }
          case 2: {
            // number checkbox checked
            usableChars += numbers; //add nubmer characters to the usable charaters string
            break;
          }
          case 3: {
            // special characters checked
            usableChars += special; // add specialcharacters to the usable charaters string
            break;
          }
        }
      }
    });
    let password = ""; // set password to an empty string;
    for (i = 0; i < lengthSlider.value; i++) {
      // loop for length of desired password
      password += usableChars[Math.floor(Math.random() * usableChars.length)]; // randomly choose a character for the password
    }
    modal.style.display = "none"; // close the modal
    return password; // return the password
  } else {
    // if all not checked send an alert
    window.alert("Please select at least one character type.");
  }
}

// check to see if all input checkboxes are uncheked
function allCheckedFalse(input) {
  return input.checked == false;
}
