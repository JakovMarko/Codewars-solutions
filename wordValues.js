// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ... z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// ["abc", "abc abc"] should return [6, 24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!

// If you like this Kata, please try:

// String matchup

// Consonant value

function wordValue(a) {
  return a.map((item, index) => {
    console.log(item);
    return (
      item.split("").reduce((tot, item) => {
        console.log("start od reduce", item);
        if (item == " ") {
          return tot + 0;
        }
        console.log(tot + item.charCodeAt(0) - 96);
        return tot + item.charCodeAt(0) - 96;
      }, 0) *
      (index + 1)
    );
    console.log(item);
  });
}

console.log(wordValue(["codewars", "abc", "xyz"]));

// function wordValue(a) {
//     return a.map((item, index) => {
//       return (
//         item.split("").reduce((tot, item) => {
//           if (item == " ") {
//             return tot + 0;
//           }
//           return tot + item.charCodeAt(0) - 96;
//         }, 0) *
//         (index + 1)
//       );
//     });
//   }
