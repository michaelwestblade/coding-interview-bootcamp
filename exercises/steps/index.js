// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    const charArray = [];
    const spacesArray = [];

    for (let i = 1; i < n; i++) {
        spacesArray.push(" ");
    }

    for (let i = 1; i <= n; i++) {
        charArray.push("#");
        console.log(`${charArray.join("")}${spacesArray.join("")}`);
        spacesArray.pop()
    }
}

function steps2(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
}

function stepsRecursive(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return stepsRecursive(n, row + 1, '');
    }

    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }
    return stepsRecursive(n, row, stair);
}

steps(4)

console.log(" -------- ");

steps2(4);

console.log(" -------- ");

stepsRecursive(5)

module.exports = steps;
