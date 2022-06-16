
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*",];
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseChar = lowercaseChar.map(lowercaseChar => lowercaseChar.toUpperCase());


function generatePassword(){

  var passwordLength = prompt("How many Characters would you like your password to be?");

  if (passwordLength >= 8 && passwordLength <=128){
    var numberConfirm = confirm("Click OK to confirm including numeric characters");
    var lowerConfirm = confirm("Click OK to confirm including lowercase alphabetical characters");
    var upperConfirm = confirm("Click OK to confirm including uppercase alphabetical characters");
    var specConfirm = confirm("Click OK to confirm including special characters");
    var passwordChars =[];

    if (!numberConfirm && !lowerConfirm && !upperConfirm && !specConfirm){
    alert("You must select atleast one character type.")
    } 
    
    if (numberConfirm === true){
      passwordChars = passwordChars.concat(numbers);
    }else{

    }
    if (lowerConfirm === true){
      passwordChars = passwordChars.concat(lowercaseChar);
    }else{
      
    }
    if (upperConfirm === true){
      passwordChars = passwordChars.concat(uppercaseChar);
    }else{
      
    }
    if (specConfirm === true){
      passwordChars = passwordChars.concat(specialChar);
    }else{
      
    }
    var passwordArray = "";

    for(var i = 0; i <= passwordLength; i++){
      var randomChar = Math.floor(Math.random()*passwordChars.length);
      passwordArray += passwordChars.substring(randomChar, randomChar +1);
    }
    return passwordArray;
  

  }else if(passwordLength < 8){
   alert("Your password must be atleast 8 characters.");
  }else{
    alert("Your password cannot be more than 128 characters long");
  }
  
  
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
