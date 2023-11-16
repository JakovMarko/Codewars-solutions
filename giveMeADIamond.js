// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

function diamond(n){
    let result = [];
    let container = '';
    if(n %2 == 0){
      return null;
    }
    for(let i = 1; i <= n; i +=2){
        for(let y=0; y <i; y++){
            container += '*';
        }
      container += '\n'
      result.push(container);
      container = ''
    }
    let newStop = result.slice();
    newStop.pop();
    return [...result, ...newStop.reverse()].join('');
  }

  console.log(diamond(5));



  function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2)
      str += ' '.repeat(len)
      str += '*'.repeat(n-2*len)
      str += '\n'
    }
    return str
  }