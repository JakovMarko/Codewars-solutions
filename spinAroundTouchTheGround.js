// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
// Examples
// ["left", "right", "left", "right"] ➞ 0

// ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

// ["left", "left", "left", "left"] ➞ 1

function spinAround(turns) {
    let left = turns.filter(item => item.includes('left')).length;
    let right = turns.filter(item => item.includes('right')).length;
    let calc = Math.abs(right*90 - left*90)/360;
  return calc < 1? 0 : Math.floor(calc);
  }

  console.log(spinAround([]));

