// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"



function solution(input, markers) {
    let contain = input.split('\n');
    let result;
    // contain.forEach((item, index, arr) => {
    //     if(arr[index][item.length-1] == ' '){
    //         arr[index][item.length-1] = 's';
    //     }
    // });

    for (let i = 0; i<=markers.length-1 ; i++){
      contain = contain.map((item, index) => {
        return item.split(markers[i])[0]
      })
      
    }
    return contain.map(item=> item.trim()).join('\n');
  };

  console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));