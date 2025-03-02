// Implement a function that returns the minimal and the maximal value of a list (in this order).
function getMinMax(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);
  return [sortedArr[0], sortedArr[sortedArr.length - 1]];
}
