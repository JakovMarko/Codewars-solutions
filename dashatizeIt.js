// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  if (String(Math.abs(num)).length < 2) return `${Math.abs(num)}`;
  return String(Math.abs(num))
    .split("")
    .map((item, index, arr) => {
      if (index == 0 && item % 2 != 0) {
        return `${item}-`;
      } else if (item % 2 != 0) {
        console.log(arr, index, arr.length - 1);
        if (arr[index - 1] % 2 == 0 && index == arr.length - 1)
          return "-" + item;
        if (arr[index - 1] % 2 != 0 && index == arr.length - 1) return item;
        if (arr[index - 1] % 2 != 0 && index != arr.length - 1)
          return item + "-";
        return "-" + item + "-";
      } else {
        return item;
      }
    })
    .join("");
}
