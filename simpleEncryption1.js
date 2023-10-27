// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    if(!text || n < 0){
        return text;
    } else {
    for(let i = 0; i < n; i++){
    text = [...text.split('').filter((item, index) => index % 2 !== 0), ...text.split('').filter((item, index) => index % 2 == 0)].join('')
    }
    return text;
    }
  }
  
  function decrypt(encryptedText, n) {
    if(!encryptedText || n < 0){
        return encryptedText;
    } else {
    let text = encryptedText;
    let num = text.length / 2;
    let decText = [];
    for(let i = 0; i < n; i++){
        let textFirst = [...text].slice(0, num)
        let textSecond = [...text].slice(num);
        for(let y = 0; y<text.length; y++){
            if(y%2 == 0){
                decText.push(textSecond.shift());
            } else {
                decText.push(textFirst.shift());
            }
        }
        text = decText.join('');
        decText = [];

        }
        return text;
    }
  }

  console.log(decrypt("20314", 3));
