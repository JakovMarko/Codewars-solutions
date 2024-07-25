// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  let arr = [...String(num)];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && i < arr.length - 1) {
      res.push(arr[i]);
      res.push("-");
    } else {
      res.push(arr[i]);
    }
  }

  return res.join("");
}
