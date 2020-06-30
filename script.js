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

//variables declarations here

var lowerCaseChar = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"];
var upperCaseChar = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","@","&","#","$","%","^","*","+"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var pwd = "";

//generatePassword() function here

function generatePassword(){

  //pwd length should be between 8 and 128 chars
  var checkPwdLength = prompt("Select a number between 8 and 128 characters for Password length");
  console.log(checkPwdLength);

  // check to make sure that the pwd length is between 8 and 128 characters
  while(checkPwdLength < 8 || checkPwdLength > 128){
    alert("The number has to be between 8 and 128");
    var checkPwdLength = prompt("Select a number between 8 and 128 characters for Password length");
  }

  var checkLowercase = confirm("Select if you want to include lowecase characters?");
  //console.log(checkLowercase);

  var checkUppercase = confirm("Select if you want to include uppercase characters?");
  //console.log(checkUppercase);

  var checkSpecialChars = confirm("Select if you want to include special characters?");
  //console.log(checkSpecialChars);

  var checkNumeric = confirm("Select if you want to include numeric value?");
  //console.log(checkNumeric);

  // check to make sure one character type  or number is selected
  while(checkLowercase === false && checkLowercase === false && checkSpecialChars === false && checkNumeric === false){
    alert("Please select one of the character or numeric options !!");
    var checkLowercase = confirm("Select if you want to include lowecase characters?");
    //console.log(checkLowercase);

    var checkUppercase = confirm("Select if you want to include uppercase characters?");
    //console.log(checkUppercase);

    var checkSpecialChars = confirm("Select if you want to include special characters?");
    //console.log(checkSpecialChars);

    var checkNumeric = confirm("Select if you want to include numeric value?");
    //console.log(checkNumeric);

  }

  //for loop to check the length and the char type to create password

  for(var i = 0; i < checkPwdLength; i++){

  //check if lower case is selected, add random letter and also check on length
  if(checkLowercase && pwd.length < checkPwdLength){
  //var randomLowerCase = lowerCaseChar[Math.floor(Math.random()*lowerCaseChar.length)];
  pwd = pwd + lowerCaseChar[Math.floor(Math.random()*lowerCaseChar.length)];
  //console.log(randomLowerCase);
  }

  //check if upper case is selected, add an upper case letter and check pwd lenght
  if(checkUppercase && pwd.length < checkPwdLength){
  //var randomUpperCase = upperCaseChar[Math.floor(Math.random()*upperCaseChar.length)];
  //console.log(randomUpperCase);
  pwd = pwd + upperCaseChar[Math.floor(Math.random()*upperCaseChar.length)];
  }

  //check if special chars are selected and if yes, add random special char and check length
  if(checkSpecialChars && pwd.length < checkPwdLength){
  //var randomSpecialChar = specialChar[Math.floor(Math.random()*specialChar.length)];
  //console.log(randomSpecialChar);
  pwd = pwd + specialChar[Math.floor(Math.random()*specialChar.length)];
  }

  //check if numers are selecte and if yes, add random number and also check length.
  if(checkNumeric && pwd.length < checkPwdLength){
  //var randomNumericChar = numeric[Math.floor(Math.random()*numeric.length)];
  //console.log(randomNumericChar);
  pwd = pwd + numeric[Math.floor(Math.random()*numeric.length)];
  }
}
  console.log(pwd);

  // return pwd to the calling function to be displayed
  return pwd;
}