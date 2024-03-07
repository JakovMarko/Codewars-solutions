// This kata is about static method that should return different values.

// On the first call it must be 1, on the second and others - it must be a double from previous value.

// Look tests for more examples, good luck :)


class Class {
    constructor(){
      this.n = 0;
    }
    static getNumber() {
      if(this.n>0){
        this.n *= 2;  
        return this.n
      } else {
        this.n = 1;
        return this.n;
      }
    }
  }