// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

// E.g.

// var abc1 = "abcdefghijklmnopqrstuvwxyz";
// var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
   
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"
// If a character provided is not in the opposing alphabet, simply leave it as be.


function SubstitutionCipher(abc1, abc2) {
    this.abc1 = abc1;
    this.abc2 = abc2;
    
    this.encode = function (str) {
     return str.split('').map(item => {
       if(abc1.indexOf(item)>= 0){
         return abc2.charAt(abc1.indexOf(item))
       } else {
         return `${item}`;
         }
     }).join('')
    }
    this.decode = function (str) {
      return str.split('').map(item => {
      if(abc2.indexOf(item)>= 0){
         return abc1.charAt(abc2.indexOf(item))
       } else {
         return `${item}`;
         }
     }).join('')
    
  }
    }



    function SubstitutionCipher(f, t) {
        this.encode = function (s) {
          return s.split('').map(function(_){ return t[f.indexOf(_)] || _; }).join('');
        }
        this.decode = function (s) {
          return s.split('').map(function(_){ return f[t.indexOf(_)] || _; }).join('');
        }
      }