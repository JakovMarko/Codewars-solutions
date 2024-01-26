// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// // 


function digits(n) {
    return String(n).split('').length;
  }





  var sum_pairs=function(ints, s){
    let seen = {};
    for(let i = 0;i < ints.length; ++i){
        if(seen[s-ints[i]]){
            return [s-ints[i], ints[i]]
        } else {
            seen[ints[i]] = true;
            console.log(seen);
        }
    }


  }


  console.log(sum_pairs([10,5,2,3,7,5], 10));