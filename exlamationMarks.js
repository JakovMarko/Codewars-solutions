// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


function replace(s){
    let vowel = 'aeiouAEIOU'
     return s.split('').map(item=> vowel.includes(item) ? '!' : item).join('');
     
     
   }