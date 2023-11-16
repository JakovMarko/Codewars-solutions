// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    let arrayNumber = String(num).split('');
    let newArray = []
    arrayNumber.forEach((item, index) => {
        if(Number(item) > 0){
           let countZero = arrayNumber.length - index;
           newArray.push(arrayNumber[index].padEnd(countZero, '0'));
        }
    })
    return newArray.join(' + ');
}

console.log(expandedForm(70304));
console.log(expandedForm(12));
