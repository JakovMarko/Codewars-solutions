// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
function solve(s) {
  let highest = "0";
  let curr = "";
  console.log(s);
  s.split("").forEach((item, index) => {
    console.log("current item:", item);
    if (item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57) {
      curr = "" + curr + item;
      console.log("adding", curr, item, highest);
    } else {
      console.log("changing highest", highest, curr);
      if (parseInt(highest) < curr) {
        console.log("this", highest, curr, highest < curr);
        highest = curr;
        curr = "";
      } else {
        curr = "";
      }
    }
  });
  console.log("highest is:", highest);
  return +highest > +curr ? +highest : +curr;
}
