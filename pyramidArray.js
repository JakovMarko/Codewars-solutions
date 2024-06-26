// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

function pyramid(n) {
  let result = [];
  if (n == 0) return [];
  let i = 1;
  while (i <= n) {
    result.push(Array(i).fill(1));
    i++;
  }
  return result;
}
