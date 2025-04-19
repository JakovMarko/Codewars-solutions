// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice

// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1
function solution(fullText, searchText) {
  let len = fullText.length;
  let newLen = fullText.split(searchText).join("").length;
  console.log(fullText, searchText, (len - newLen) / searchText.length);
  return (len - newLen) / searchText.length;
}
console.log(solution("ccddeeccddeecc", "cc"));
