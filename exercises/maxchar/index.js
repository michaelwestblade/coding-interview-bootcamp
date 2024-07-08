// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};

    for(const char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        }else {
            charMap[char] += 1;
        }
    }

    return Object.entries(charMap).reduce((acc, [character, count]) => {
        if(count > acc.count) {
            acc.character = character;
            acc.count = count;
        }
        return acc;
    }, {'character': '', 'count': 0}).character
}

console.log('maxChar("abcccccccd") === "c"', maxChar("abcccccccd") === "c");
console.log('maxChar("apple 1231111") === "1"', maxChar("apple 1231111") === "1");

module.exports = maxChar;
