//PsuedoCode 
// 1. When the button is pressed a prompt appears (done)
// 2. User then selects pw criteria 
// 3. Length of password has to be at least 8 or less than 128 characters
// 4. Includes lowercase, uppercase, numeric, & special characters 
// 5. After password is generated, it needs to appear on the page (alert message)

// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "
var uppercase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ "
var lowercase = " abcdefghijklmnopqrstuvwxyz "
var numbers = " 0123456789 "

console.log(typeof characters); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var generate =prompt("How many characters would you like in your password?");
  if(generate.length < 8){
    alert("Password must be more than 8 characters");
  }

  var uppercase = confirm("Would you like uppercase letters in your password?")
  if(confirm)

  var lowercase = confirm("Would you like lowercase letters in your password?")

  var specialCharacters = confirm("Would you like specialCharacters in your password?")

  var numbers = confirm("Would you like numbers in your password?")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

