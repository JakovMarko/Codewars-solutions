// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!



function doubleChar(str) {
    let result = [];
    str.split('').forEach((item, index) => {
        result.push(item, item);
    });
    return result.join('')
  }
  


  console.log(doubleChar);