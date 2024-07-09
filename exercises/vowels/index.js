// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function vowels(str) {
    let vowelCount = 0;

    for (const char of str.toLowerCase()) {
        if (VOWELS.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

function vowels2(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(`vowels('Hi There!') --> 3`, vowels('Hi There!'));
console.log(`vowels('Why do you ask?') --> 4`, vowels('Why do you ask?'));
console.log(`vowels('Why?') --> 0`, vowels('Why?'));

console.log(`vowels('Hi There!') --> 3`, vowels2('Hi There!'));
console.log(`vowels('Why do you ask?') --> 4`, vowels2('Why do you ask?'));
console.log(`vowels('Why?') --> 0`, vowels2('Why?'));

module.exports = vowels;
