// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"
function evenChars(string) {
  return string.length < 2
    ? "invalid string"
    : string.length > 100
    ? "invalid string"
    : string.split("").filter((item, index) => index % 2);
}
