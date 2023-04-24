//  Vowel versus Consonant



let word = "ukelele";
// -create a function that accepts a string of lowercase letters
function vowelConsonant(s){

    // -determine how many consonant and vowels it has
    // -first we will initialize a count for vowel to 0
    let vowel = 0;
    // -initialize a consonant variable to 0
    let consonant = 0;
    // -We will create multiple if statements inside a for loop to test each letter in word
    // -increase vowel by 1 if any are true
    for(i = 0; i < s.length; i++){
        let letter = s[i];
        if(letter === "a"){vowel++}
        if(letter === "e"){vowel++}
        if(letter === "i"){vowel++}
        if(letter === "o"){vowel++}
        if(letter === "u"){vowel++}
    }
    // -Once we have our vowel we will subtract vowel from s.length inside of the consonant variable
    consonant = s.length - vowel;
    // -Finally include both vowel and consonant variables inside of console.log output
    // -print the full string at the beginning of the expected console.log
    console.log(`${s} has ${consonant} consonants and ${vowel} vowels`)
}

vowelConsonant(word);

// Test output
/* "hello"
-includes"a" - vowel = 0
-includes"e" - vowel = 1
-includes"i" - vowel = 1
-includes"o" - vowel = 2
-includes"u" - vowel = 2
-consonant = 5 - 2 = 3
expect "hello has 3 consonants and 2 vowels"




*/