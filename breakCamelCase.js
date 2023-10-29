// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return string.split('').map((item, index) => {
        if(item == item.toUpperCase()){
            return ' ' + item;
        } else {
            return item;
        } 
        }).join('');
}

console.log(solution("camelCasing"));
console.log(solution('camelCasingTest'));

