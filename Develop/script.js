// Assignment code here
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var specialCharacters = ["!", "#", "$", "%", "&", "'", "*", "(", ")"]; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  chosenChars = []; 
  randomPW = []; 

  var pwLength = parseInt(prompt("Enter a password length between 8 and 128 characters:"));

  if (pwLength < 8 || pwLength > 128 || !pwLength) {
    alert("Oops! Try again"); 
      generatePassword(); 
  } 

    
    var lowerPW = confirm("Click OK to INCLUDE LowerCase Characters in your Password. Click Cancel to Exclude.");
    var upperPW = confirm("Click OK to INCLUDE UpperCase Characters in your Password. Click Cancel to Exclude."); 
    var numericPW = confirm("Click OK to INCLUDE Numeric Characters in your Password. Click Cancel to Exclude."); 
    var specialPW = confirm("Click OK to INCLUDE Special Characters in your Password. Click Cancel to Exclude."); 
      
  if (!lowerPW && !upperPW && !numericPW && !specialPW) {
    alert("You have selected have the world's worst password of nothing!");
      generatePassword(); 
  }

  if(lowerPW) {
    chosenChars = chosenChars.concat(lowerPW); 
  }
  if(upperPW) {
    chosenChars = chosenChars.concat(UpperCharacters);
  }
  if(numericPW){
    chosenChars = chosenChars.concat(numericCharacters);
  }
  if(specialPW){
    chosenChars = chosenChars.concat(specialCharacters);
  }


for (var i = 0; i < pwLength; i++) {
  randomPW[i] = chosenChars[Math.floor(Math.random() * pwLength)];  
}
return randomPW; 
}

