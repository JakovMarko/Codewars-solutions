// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1


function findNb(m) {
    let c = 0;  
    let result = 0;
    for(let i=1 ; result < m; i++){
      result +=i*i*i;
      c=i;
    }
    if(result == m){
      return c;
      
    }
      return (-1);
  }
  