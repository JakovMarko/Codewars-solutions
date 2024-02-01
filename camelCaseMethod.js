// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)





String.prototype.camelCase=function(){
    // let words=this.split('');
    // return words.map((item, index) => {
    //   if(index == 0){
    //     return item.toUpperCase()
    //   } else if(words[index-1] == ' '){
    //     return item.toUpperCase()
    //   } else if(item== ' '){
    //     return '';
    //   } else {
    //     return item;
    //   }
    // }).join('')

    return this .split(' ')
                .map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    })          
                .join('')
  }


console.log('this is not good'.camelCase());

function isValidIp(str){
    const octets = str.split('.');

    return (octets.length === 4) &&
        octets.reduce((acc, octet) => 
            (acc === true) &&
            (String(Number(octet)) === octet) &&
            (Number(octet) >= 0) &&
            (Number(octet) <= 255)
            , true
        )
}

console.log(isValidIp('123.1.1.2'))
console.log(isValidIp('01.aasd11.ad1.22'))
