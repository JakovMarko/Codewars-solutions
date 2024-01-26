// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    let arr=[...str];
    for(let i=0; i<=arr.length-1;i++){
      if(arr[i-1] == '-' || arr[i-1]=='_'){
        arr[i] = arr[i].toUpperCase();
        arr[i-1] = '';
      }
    }
  return arr.join('');
  }