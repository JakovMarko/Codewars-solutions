// // For this kata you will have to forget how to add two numbers.

// // It can be best explained using the following meme:

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
  let arr1 = String(num1).split("").reverse();
  let arr2 = String(num2).split("").reverse();
  let length = String(Math.max(num1, num2)).length;
  let res = [];
  console.log(arr1, arr2);
  for (let i = 0; i < length; i++) {
    res.unshift((Number(arr1[i]) || 0) + (Number(arr2[i]) || 0));
    console.log(res);
  }
  return parseInt(res.join(""), 10);
}
