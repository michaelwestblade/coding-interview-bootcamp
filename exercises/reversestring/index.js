// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * my solution
 * @param str
 * @returns {string}
 */
function reverse(str) {
    const reversedStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr.push(str[i]);
    }

    return reversedStr.join("");
}

/**
 * solution with array reverse builtin
 * @param str
 * @returns {*}
 */
function reverse2(str) {
    const stringAsArray = str.split('');
    const reversedStringArray = stringAsArray.reverse();

    // return str.split('').reverse().join('');

    return reversedStringArray.join("");
}

/**
 * solution with a for loop
 * @param str
 * @returns {string}
 */
function reverse3(str) {
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed
    }

    return reversed;
}

/**
 * solution with an array reduce
 * @param str
 * @returns {*}
 */
function reverse4(str) {
    return str.split('').reduce((reversedString, character) => {
        return character + reversedString;
    }, '');
}

console.log(reverse('apple'));
console.log(reverse('hello'));
console.log(reverse('Greetings!'));

console.log(reverse2('apple'))
console.log(reverse3('apple'))
console.log(reverse4('apple'))

module.exports = reverse;
