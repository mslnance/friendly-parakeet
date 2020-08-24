//Inialize pwValue which is a global variable
var pwValues = "";
var password = "";
//The function constructs the selected character types
var charTypes=function() {
  //include all possible letters
  var pwLtrValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //include all possible number
  var pwNbrValues = "123456780";
  //include all possible special characters
  var pwSymValues= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  //Prompt for uppercase letters
  var confirmUC = window.confirm("Should it include uppercase letters?");
  if (confirmUC) {
    pwValues = pwLtrValues;
  }
  
  //Prompt for lowercase letters
  var confirmLC = window.confirm("Should it include lowercase letters?");
  if (confirmLC) {
    //make letters lowercase
    pwValues = pwValues + pwLtrValues.toLowerCase();
  }  
  
  //Prompt for numbers
  var confirmNbr = window.confirm("Should it include numbers?");
  if (confirmNbr) {
    pwValues = pwValues + pwNbrValues;
  }
  
  //Prompt for special characters
  var confirmSym = window.confirm("Should it include special characters?");
  if (confirmSym) {
    pwValues = pwValues + pwSymValues;
    
  }
  
  //Validate and make sure at least one character type is selected
  if (!pwValues) {
    window.alert("You need to provide at least one character type! Please try again.");
    charTypes();
  }
}

var generatePassword=function() {
  //Starts criteria prompting
  
  var promptPwLength = window.prompt('Please choose a password length between 8 and 128 characters');
  //Checks if password length entered is between 8 and 128
  if (promptPwLength >= 8 && promptPwLength <= 128) {
    
    //The function constructs the selected character types
    charTypes();
    
    //Creates random password using selected criteria
    for(var i=0; i < promptPwLength; i++) {
        password = password + pwValues.charAt(Math.floor(Math.random() * Math.floor(pwValues.length - 1)));
    }
    
    return password;
    
  }
  //If password length entered is not between 8 and 128 or is null
  window.alert("That is not a valid choice! Please try again.");
  return generatePassword();

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
