// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    let newA = [];
    let word = s.split('');
    word.forEach((item, index) => {
      if(item == '#'){
        newA.pop();
    } else {
        newA.push(word[index])
    } 
});
return newA.join('');
  }

  console.log(cleanString("abc#d##c"));