//  Reverse Array

// we first will recieve an array of numbers in a function
let testArray = [20, 50, 30, 60, 200];
function reverseArray(array){

    // initialize an empty array
    let rArray = [];
    // create a for loop starting from end of first array
    // do this by initializing i from array.length - 1 and set condition to be while i is >= 0 , i--
    for(i = array.length - 1; i >=0; i--){
        // push index value to rArray
        rArray.push(array[i]);
    }
    // console log new array
    console.log(rArray);
}

reverseArray(testArray);
/* Test Output
[1,2,3]
//rArray at i = 2 //- rArray = [3]
//rArray at i = 1 //- rArray = [3,2]
//rArray at i = 0 //- rArray = [3,2,1]




*/