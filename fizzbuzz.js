// FizzBuzz
// Create a function that doesn't recieve anything
function fizzBuzz(){
    let val = 100;
    // create a for loop that starts at index of 1 and continues to increment until it equals 100
    for(i = 1; i <= val; i++){
        // create 3 if statements with the first one being if the value at index is divisable by 3 and 5, output "FizzBuzz"
        if(i % 3 === 0 && i % 5 === 0){console.log("FizzBuzz")}
        //-else if value is divisable by 3 output Fizz
        else if(i % 3 === 0){console.log("Fizz")}
        // -else if value is divisable by 5 output Buzz
        else if(i % 5 === 0){console.log("Buzz")}
        // else return value
        else{console.log(i)}
    }
}

fizzBuzz();

// Test Output val = 15
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
