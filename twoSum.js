// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]


function twoSum(numbers, target) {
    let total = 0;
    let result = [];
      for(let i = 0; i<numbers.length; i++){
        for(let y = 1; y < numbers.length; y++){
          total = numbers[i] + numbers[y]
          if(total == target){
            result.push(i);
            result.push(y);
            return result;
          }
        }
      }
  }


  console.log(twoSum([1234, 5678, 9012], 14690));
  console.log(twoSum([2, 3, 1], 3));
  console.log(twoSum([1, 2, 3], 4));
