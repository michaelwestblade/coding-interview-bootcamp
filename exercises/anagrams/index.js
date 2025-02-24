// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharMap(string) {
    const charMap = {};
    for(const char of string.replace(/[^\w]/g, '').toLowerCase()) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] += 1;
        }
    }
    return charMap;
}

function anagrams(stringA, stringB) {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for(const [char, count] of Object.entries(charMapA)) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

    return true;
}

function cleanString(stringToClean) {
    return stringToClean.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams2(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

console.log(`anagrams('rail safety', 'fairy tales') --> True`, anagrams('rail safety', 'fairy tales'));
console.log(`anagrams('RAIL! SAFETY!', 'fairy tales') --> True`, anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(`anagrams('Hi there', 'Bye there') --> False`, anagrams('Hi there', 'Bye there'));

module.exports = anagrams;
