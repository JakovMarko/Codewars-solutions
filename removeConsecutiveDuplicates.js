// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

function removeConsecutiveDuplicates(string) {
  if (!string) return "";
  let arr = string.split(" ");
  let result = arr
    .filter((item, index, array) => {
      if (array[index - 1] != item) {
        return item;
      }
    })
    .join(" ");

  return result.trim();
}
