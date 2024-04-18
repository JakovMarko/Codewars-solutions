// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// //
function findLongest(array) {
  let longest = 0;
  let max = 0;
  array.forEach((item, index) => {
    if (`${item}`.length > longest) {
      longest = `${item}`.length;
      max = item;
    }
  });
  return max;
}
