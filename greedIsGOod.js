// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.


function score( dice ) {
   let diceSorted = dice.slice().sort((a, b) => a-b);
    let arr = diceSorted.reduce((obj, item) => {
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;

        return obj;
    }, {})
    console.log(arr);
    let result = 0;
    for(item in arr){
        console.log('key:', item,'value: ', arr[item]);
        if (item == 1){
            if(arr[item] >= 3){
            for(let i = arr[item]; i >2; i-=3){
                result += 1000;
                arr[item]-=3;
            }
        }
        console.log('key:', item,'value: ', arr[item]);

        result = result + (arr[item]*100);
            
        } else if (item == 5){
            if(arr[item] >= 3){
            for(let i = arr[item]; i >2; i-=3){
                result += 500;
                arr[item]-=3;

            }
        }
        result = result + (arr[item]*50);
            
        } else {
            if(arr[item] >= 3){
                for(let i = arr[item]; i >2; i-=3){
                    result = result + item * 100;
                }
        }
        }
    }
    return result;
}



  console.log(score([2,2,2,3,3]));