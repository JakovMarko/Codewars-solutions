// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  return x.reduce((total, current) => {
    if (current === parseInt(current, 10)) {
      return (total += current);
    } else {
      return (total -= parseInt(current, 10));
    }
  }, 0);
}
