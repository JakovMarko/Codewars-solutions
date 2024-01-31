// Task:
// You have to write a function pattern which creates the following pattern (See Examples) upto desired number of rows.

// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

// Examples:
// pattern(9):

// 123456789
// 234567891
// 345678912
// 456789123
// 567891234
// 678912345
// 789123456
// 891234567
// 912345678
// pattern(5):

// 12345
// 23451
// 34512
// 45123
// 51234
// Note: There are no spaces in the pattern

// Hint: Use \n in string to jump to next line


function pattern(n){
    if(n=='' || n==0) return '';
    let arr =[];
    let c=1;
    while(c<=n){
    arr.push(c);
    c++;
      }
    let result = [];
  for(let i=0; i<n ; i++){
    let current = [...arr.slice(i), ...arr.slice(0, i)];
    result.push(current.join(''));
    
  }
    return result.join('\n');
   }
  