// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// The Office I - Outed
// The Office III - Broken Photocopier
// The Office IV - Find a Meeting Room
// The Office V - Find a Chair

function boredom(staff) {
  //   let total = 0;
  //   for (const person in staff) {
  //     if (staff[person] == "accounts") {
  //       total += 1;
  //     } else if (staff[person] == "finance") {
  //       total += 2;
  //     } else if (staff[person] == "canteen") {
  //       total += 10;
  //     } else if (staff[person] == "regulation") {
  //       total += 3;
  //     } else if (staff[person] == "trading") {
  //       total += 6;
  //     } else if (staff[person] == "change") {
  //       total += 6;
  //     } else if (staff[person] == "IS") {
  //       total += 8;
  //     } else if (staff[person] == "retail") {
  //       total += 5;
  //     } else if (staff[person] == "cleaning") {
  //       total += 4;
  //     } else if (staff[person] == "pissing about") {
  //       total += 25;
  //     }
  //   }
  //   if (total <= 80) {
  //     return "kill me now";
  //   } else if (total < 100) {
  //     return "i can handle this";
  //   } else {
  //     return "party time!!";
  //   }
  let map = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  let total = Object.keys(staff).reduce(function (a, b) {
    a + map[staff[b]];
  }, 0);
  return total <= 80
    ? "kill me now"
    : total < 100 && total > 80
    ? "i can handle this"
    : "party time";
}
