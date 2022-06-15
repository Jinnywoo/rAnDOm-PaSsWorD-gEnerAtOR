
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*",];
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseChar = lowercaseChar.map(lowercaseChar => lowercaseChar.toUpperCase());


function generatePassword(){

  var passwordLength = prompt("How many Characters would you like your password to be?");

  if (passwordLength >= 8 && passwordLength <=128){
    
  }else{
   confirm("You must select a password length between 8 and 128 characters long.");
  }
  
  var numberConfirm = confirm("Click OK to confirm including numeric characters");
  var lowerConfirm = confirm("Click OK to confirm including lowercase alphabetical characters");
  var upperConfirm = confirm("Click OK to confirm including uppercase alphabetical characters");
  var specConfirm = confirm("Click OK to confirm including special characters");

  console.log(numberConfirm);
  console.log(lowerConfirm);
  console.log(upperConfirm);
  console.log(specConfirm);
  
}










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
