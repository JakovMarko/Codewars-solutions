// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value) {
  let val = "" + value;
  while (val.length < 5) {
    val = "0" + val;
  }
  return `Value is ` + val;
}
