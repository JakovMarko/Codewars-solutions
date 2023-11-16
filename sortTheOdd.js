// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



function sortArray(array) {
    let oddArray = array.filter(item => item%2 != 0);
    oddArray.sort((a,b) => a < b ? -1 : 1)
    return array.map(item => {
        if(item%2 != 0){
            return item = oddArray.shift();
        } else {
            return item;
        }
    })

}


console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));