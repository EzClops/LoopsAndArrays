/*   Only Odds
-this code accepts an array of numbers and returns a new array of only the odd numbers
    -create a for loop that iterates through array of numbers
    -analayze each index value using modulus to determine if it has a remainder
        -if so then add value into new array
-if there is only one odd number, then return an array with a length of 1
-if new array length evaluates to 0, then output a string that says "Array was an even array so no odds"

-Test values
[2, 4, 6, 8, 11, 20, 15, 22]	
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	
[70, 42, 55, 81, 21, 91, 34]	
[2, 4, 6, 8, 10, 11, 12] 


*/
let testArray = [2, 4, 6, 8, 10, 11, 12];

function onlyOdds(array) {
    let oddArray = [];
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){oddArray.push(array[i])}
    }
    if(oddArray.length === 0){
        return console.log("No odd values found.");
    }
    return console.log(oddArray);
}

onlyOdds(testArray);

/* [2, 4, 6, 8, 11, 20, 15, 22]
    //2 - oddArray[]
    //4 - oddArray[]
    //6 - oddArray[]
    //8 - oddArray[]
    //11 - oddArray[11]
    //20 - oddArray[11]
    //15 - oddArray[11, 15]
    //22 - oddArray[11, 15]
    //oddArray.length === 2
        -expect to see [11, 15]

*/