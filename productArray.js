// Write a function that returns the number of arguments it received.

// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

function args_count(...args) {
  const n = [...args];
  return n.length;
}
function productArray(numbers) {
  return numbers.map((x) => numbers.reduce((a, b) => a * b) / x);
}
