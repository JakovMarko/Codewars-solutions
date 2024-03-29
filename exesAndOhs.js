// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
    let arr = str.toLowerCase().split('');
  let countX = arr.filter(item => item == 'x');
  let countO = arr.filter(item => item == 'o')
  
  return countX.length==countO.length ? true : false;
}