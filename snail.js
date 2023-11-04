// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]


snail = function(array) {
    let count = array.length;
    let countTwo = array[0].length;
    let startArr = array[0];
    let endArr = array[count-1];
    let rightSide = array.map(item => item[countTwo-1]);
    rightSide.pop()
    rightSide.shift();
    // first item full -> every item inbetween last item -> last item full in reverse -> first item from last-1 to first+1 -> 
    let leftSide=array.map(item => item[0]);
    leftSide.pop();
    leftSide.shift();
    for(let i=1; i<count; i++){
        

    }
    
    
    let result = [...startArr,...rightSide,...leftSide,...endArr.reverse()];

    

    return result;
  }


  console.log(snail([[1,2,3],
    [8,9,4],
    [7,6,5]]));