// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    const mostCommonCharacter = {'character': '', 'count': 0}

    for(const char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        }else {
            charMap[char] += 1;
        }

        if (charMap[char] > mostCommonCharacter.count) {
            mostCommonCharacter.count = charMap[char];
            mostCommonCharacter.character = char;
        }
    }

    return mostCommonCharacter.character;

    // return Object.entries(charMap).reduce((acc, [character, count]) => {
    //     if(count > acc.count) {
    //         acc.character = character;
    //         acc.count = count;
    //     }
    //     return acc;
    // }, {'character': '', 'count': 0}).character
}

function maxChar2(str) {

}

console.log('maxChar("abcccccccd") === "c"', maxChar("abcccccccd") === "c");
console.log('maxChar("apple 1231111") === "1"', maxChar("apple 1231111") === "1");

module.exports = maxChar;
