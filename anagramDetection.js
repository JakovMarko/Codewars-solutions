// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


// write the function isAnagram
var isAnagram = function(test, original) {
    let testTwo = test.toLowerCase().split('');
    let originalTwo = original.toLowerCase().split('');
    let position;
    if(testTwo.length != originalTwo.length){
        return false;
    }
    testTwo.forEach((item, index)=>{
        if(originalTwo.includes(item)){
            position = originalTwo.indexOf(item);
            originalTwo = [...originalTwo.slice(0, position), ...originalTwo.slice(position+1)];
        }
    })

    return originalTwo.length>0 ?  false : true;

};

console.log(isAnagram("Twoo", "WooT"));
console.log(isAnagram("ound", "round"));

