// var generateBtn = document.querySelector("#generate");

// function writePassword() {
//   var password = generatePassword();
//   var passwordTest = document.querySelector("#password");

//   passwordText.value = password;
// }

// generateBtn.addEventListener("click", writePassword);

// //variables

// var special = " !\"/#$%&'()*+,-./:;<=>?@{|}~";
// var num = "0123456789";
// var lower = "abcdefghijklmnopqrstuvwxyz";
// var upper = lower.toUpperCase();
// var Final = "";
// var passwordLength = 0;
// var password = "";

// function generatePassword() {
//   alert("welcome to jares password generater");
//   //created while loop

//   while (passwordLength > 128 || passwordLength < 8) {
//     passwordLength = prompt(
//       "Your password should be between 8 to 128 characters or its  not gonna work"
//     );
//     if (passwordLength > 128 || passwordLength < 8) {
//       alert("wroooooong");
//     }
//   }

//   special = confirm(
//     "would you like to use these characters? !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "
//   );
//   return generatePassword();
// }
// var generatefinal = function () {
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
// var generatePass = function () {
//   password = "";

//   var charList = generateFinal();
//   for (var i = 0; i < passwordLength; i++) {
//     password += charList[Math.floor(Math.random() * charList.length)];
//   }
//   return password;
// };
