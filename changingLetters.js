// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(string) {
  let vowels = "aeiou";
  return string
    .split("")
    .map((item) => {
      if (
        item == "a" ||
        item == "e" ||
        item == "i" ||
        item == "o" ||
        item == "u"
      ) {
        console.log("run", item);
        return item.toUpperCase();
      } else {
        return item;
      }
    })
    .join("");
}
