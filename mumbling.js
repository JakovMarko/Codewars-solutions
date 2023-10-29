// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.




function accum(s) {
	let words = s.split('');
    let result = [];

    let results = words.map((item, index) => {
        return item.repeat(index+1).toLowerCase();
    })
    results.forEach((item,index) => results[index] = item.charAt(0).toUpperCase() + item.slice(1));
    console.log(results);

}

console.log(accum("RqaEzty"));


function accumTwo(s){
    return s.split('').map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index)).join('-');
}

console.log(accumTwo("RqaEzty"));