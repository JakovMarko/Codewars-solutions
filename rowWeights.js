// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.



function rowWeights(array){
    let weightOne = 0;
    let weightTwo = 0;
    for(let i=0; i < array.length; i++){
        if(i%2 ==0){
            weightOne += array[i];
        } else {
            weightTwo += array[i];
        }
    }
    return [weightOne, weightTwo];
  }