// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock


function getMiddle(s)
{
  let middle = Math.floor(s.length/2);
  if(s.length%2 == 0){
    return s[middle-1] + s[middle];
  } else {

      return s[middle];
  }
}



console.log(getMiddle('testing'));
console.log(getMiddle('test'));
