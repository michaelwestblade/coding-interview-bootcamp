// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = str.split(' ');
    const capitalizedWords = [];

    for (const word of words) {
        const firstLetterCapitalized = word.charAt(0).toUpperCase();
        capitalizedWords.push(`${firstLetterCapitalized}${word.slice(1)}`);
    }

    return capitalizedWords.join(' ');
}

function capitalize2(str) {
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if(str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(`capitalize('a short sentence') --> 'A Short Sentence'`, capitalize('a short sentence'));
console.log(`capitalize('a lazy fox') --> 'A Lazy Fox'`, capitalize('a lazy fox'));
console.log(`capitalize('look, it is working!') --> 'Look, It Is Working!'`, capitalize('look, it is working!'));

console.log(`capitalize2('a short sentence') --> 'A Short Sentence'`, capitalize2('a short sentence'));
console.log(`capitalize2('a lazy fox') --> 'A Lazy Fox'`, capitalize2('a lazy fox'));
console.log(`capitalize2('look, it is working!') --> 'Look, It Is Working!'`, capitalize2('look, it is working!'));

module.exports = capitalize;
