// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


function mxdiflg(a1, a2) {
    console.log(a1, a2)
     let totalA1 = a1.sort((a, b) => a.length-b.length);
     let totalA2 = a2.sort((a, b) => a.length-b.length);
   if(totalA1.length ==0 || totalA2.length==0) return -1;
    let maxOne = Math.abs(totalA1[0].length - totalA2[totalA2.length-1].length);
    let maxTwo = Math.abs(totalA2[0].length - totalA1[totalA1.length-1].length);
    return  maxOne>maxTwo? maxOne : maxTwo;
  
  }