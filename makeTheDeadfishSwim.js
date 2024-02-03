// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]


// Return the output array, and ignore all non-op characters
function parse( data )
{
  let n = 0;
  let result = [];
  let arr = data.split('');
  
  for(let i=0; i<= arr.length-1; i++){
    if(arr[i] == 'i'){
      n++;
    } else if(arr[i] == 'd'){
      n--;
    } else if(arr[i] == 's'){
      n = n*n;
    } else if(arr[i] == 'o'){
      result.push(n);
    }
  }
  return result;
}
