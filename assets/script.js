// Assignment code here
function retrievePassword() {

  // Variables for a list of characters 
  var password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "~!@#$%^&*()_+=-`',|[]{}<>?/:";
  var variety = [];

  // Prompt user to enter the desired number of characters for their password between 8 to 128 characters
  var passLength = prompt ("Enter length of password between 8 to 128 characters");

  // Alert to user if they have selected a number or a random character outside of 8 to 128 characters
  if (passLength < 8 || isNaN(passLength)) {
  alert("Your password must be at least 8 characters long");

  } else if (passLength > 128 || isNaN(passLength)) {
  alert("Your password must be no more than 128 characters long");
  return;

// Variables to confirm with the user on the types of characters they want in their password
  } else {
   var lowerChar = confirm("Click the OK button if you would like lowercase characters in your password.");
   var upperChar = confirm("Click the OK button if you would like uppercase characters in your password.");
   var numericChar = confirm("Click the OK button if you would like numbers in your password.");
   var specialChar = confirm("Click the OK button if you would like special characters in your password.");
  }

  if (lowerChar) {variety.push(lowercase)}
  if (upperChar) {variety.push(uppercase)}
  if (numericChar) {variety.push(numeric)}
  if (specialChar) {variety.push(special)}

//For loop to repeat and will end once the password has been generated
  for (var i = 0; i < passLength; i++) {
  var randomType = Math.floor(Math.random() * variety.length);

  var randomCharnum = Math.floor(Math.random() * variety[randomType].length);

  var randomChar = variety[randomType].charAt(randomCharnum);

  password += randomChar
  }
  return (password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = retrievePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);