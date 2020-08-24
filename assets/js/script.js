// Assignment code here
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

var generatePassword=function() {

  var pwValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456780!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  //WHEN prompted for the length of the password
  //THEN I choose a length of at least 8 characters and no more than 128 characters
  var password = "";
  var promptPwLength = window.prompt('Please choose a password length between 8 and 128 characters');
  if (promptPwLength >= 8 && promptPwLength <= 128) {
    for(var i=0; i < promptPwLength; i++) {
        password = password + pwValues.charAt(Math.floor(Math.random() * Math.floor(pwValues.length - 1)));
        
    }
    console.log(password);
     return password;
  }
  window.alert("That is not a valid choice! Please try again.");
  generatePassword();
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate") 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);