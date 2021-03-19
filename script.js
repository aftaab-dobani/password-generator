//PsuedoCode 
// 1. When the button is pressed a prompt appears (done)
// 2. User then selects pw criteria 
// 3. Length of password has to be at least 8 or less than 128 characters
// 4. Inclues lowercase, uppercase, numeric, & special characters 
// 5. After password is generated, it needs to appear on the page (alert message)

// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

console.log(typeof characters); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var click=prompt("How many characters would you like in your password?");
  if(characters.length < 8){
    prompt("Password must be more than 8 characters");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

