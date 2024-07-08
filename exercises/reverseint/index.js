// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const sign = Math.sign(n); // n/Math.abs(n)
    // return sign * parseInt(n.toString().split('').reverse().join(''))
    return sign * parseInt(`${n}`.split('').reverse().join(''))
}

console.log('reverseInt(15) === 51', reverseInt(15) === 51);
console.log('reverseInt(981) === 189', reverseInt(981) === 189);
console.log('reverseInt(500) === 5', reverseInt(500) === 5);
console.log('reverseInt(-15) === -51', reverseInt(-15) === -51);
console.log('reverseInt(-90) === -9', reverseInt(-90) === -9);

module.exports = reverseInt;
