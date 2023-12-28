// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let array1 = [];
    let array2 = [];
    s.split('').map((item,index) => {
      if(index%2 == 0){
        array1.push(item.toUpperCase());
        array2.push(item.toLowerCase());
      } else {
        array1.push(item.toLowerCase());
        array2.push(item.toUpperCase());
      }
    })
     return [array1.join(''), array2.join('')]
  };



