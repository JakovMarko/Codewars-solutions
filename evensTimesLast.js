// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  if (numbers.length < 1) return 0;

  let res = numbers.filter((item, index) => index % 2 == 0);
  console.log(numbers, res);
  return (
    res.reduce((total, curr) => total + curr, 0) * numbers[numbers.length - 1]
  );
}
