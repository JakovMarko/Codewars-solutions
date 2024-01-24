// DESCRIPTION:
// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    let words = text.split(' ');
    let result = words.map(item => {
      if(item.length <= 1){
        return item.charCodeAt(0);
      } else if(item.length <=2 ){
        return item.charCodeAt(0)+item[1];
      }
       let textArr = [...item];
       let textMidd = textArr.slice(2,textArr.length-1);
       let asciFirstLetter = item.charCodeAt(0);
       return [asciFirstLetter, textArr[textArr.length-1], ...textMidd, textArr[1]].join('')
 }).join(' ');
    
    return result;
     // Implement me! :)
   }