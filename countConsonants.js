// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
  if (str.length < 0) return 0;

  let num = str
    .toLowerCase()
    .split("")
    .reduce((total, item) => {
      if (
        item.charCodeAt(0) > 97 &&
        item.charCodeAt(0) <= 122 &&
        item.charCodeAt(0) != 101 &&
        item.charCodeAt(0) != 105 &&
        item.charCodeAt(0) != 111 &&
        item.charCodeAt(0) != 117
      ) {
        console.log("one", item);
        return total + item;
      } else {
        console.log("two", item);

        return total + "";
      }
    }, "").length;
  return num;
}
