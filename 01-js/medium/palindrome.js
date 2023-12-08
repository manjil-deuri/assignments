/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reversedStr="";
  let j = str.length-1;
  for (let i=str.length-1; i>=0; i--) {   
    if(isSpecialCharacter(str.charAt((str.length-1) - i))) {
      reversedStr += str.charAt((str.length-1) - i)
    }
    else {
        while(isSpecialCharacter(str.charAt(j))) {
          j--;
        }
        reversedStr += str.charAt(j);
        j--;
      }
  }
  return reversedStr.toLowerCase() == str.toLowerCase();
}

function isSpecialCharacter(str) {
  return str.match(/[^a-zA-Z0-9]/gi) 
}

module.exports = isPalindrome;
