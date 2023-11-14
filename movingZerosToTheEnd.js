// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let count = 0;
    let arrTwo = arr.filter((item , index) =>{
        if(item !== 0){

            return true;
        } else {
            count++;
        }
    });

    return [...arrTwo, ...Array(count).fill(0)];
    

}


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));