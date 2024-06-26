// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

const solve = (s) => {
  let result = [0, 0, 0, 0];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i].toLowerCase() > s[i]) {
      result[0] += 1;
    } else if (s[i].toUpperCase() < s[i]) {
      result[1] += 1;
    } else if (s[i] >= 0 && s[i] <= 9) {
      result[2] += 1;
    } else {
      result[3] += 1;
    }
  }
  return result;
};
