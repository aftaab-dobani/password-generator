//PsuedoCode 
// 1. When the button is pressed a prompt appears (done)
// 2. User then selects pw criteria 
// 3. Length of password has to be at least 8 or less than 128 characters
// 4. Includes lowercase, uppercase, numeric, & special characters 
// 5. After password is generated, it needs to appear on the page (alert message)

// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=>", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "6", "7", "8", "9"]


var finalPassword = [];  

console.log(uppercase[25]); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var selectedCharacter = [];

  var passLength =prompt("How many characters would you like in your password?");
  if(passLength < 8 || passLength > 128){
    alert("Password must be between 8-128 characters");
    return 
  }

  var wantUppercase = confirm("Would you like uppercase letters in your password?")
  if(wantUppercase){
    selectedCharacter = selectedCharacter.concat(uppercase);
    console.log(selectedCharacter);
  }

  var wantLowercase = confirm("Would you like lowercase letters in your password?")
  if(wantLowercase){
    selectedCharacter =selectedCharacter.concat(lowercase);
    console.log(selectedCharacter)
  }

  var wantSpecialCharacters = confirm("Would you like specialCharacters in your password?")
  if (wantSpecialCharacters){
    selectedCharacter = selectedCharacter.concat(specialCharacters);
    console.log(specialCharacters)
  }

  var wantNumbers = confirm("Would you like numbers in your password?")
  if (wantNumbers){
    selectedCharacter = selectedCharacter.concat(numbers);
    console.log(numbers)
  }

  if(selectedCharacter.length === 0){
    alert("Invalid input, must choose a character")
  }

  for (var i = 0; i < passLength; i++ ){
    //console.log(Math.floor(Math.random() * selectedCharacter.length))
    finalPassword += (selectedCharacter[Math.floor(Math.random() * selectedCharacter.length)]);
    
  }
  return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

