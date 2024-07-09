// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const width = (2*n) - 1;
    for (let i = 1; i <= width; i+=2) {
        const spaces = width - i;
        let precedingSpaces = spaces > 0 ? Math.floor(spaces / 2) : 0;
        let trailingSpaces = spaces > 0 ? Math.floor(spaces / 2) : 0;
        let characters = i;
        let stringToPrint = "";

        while(precedingSpaces > 0) {
            stringToPrint += " ";
            precedingSpaces -= 1;
        }

        while(characters > 0) {
            stringToPrint += "#";
            characters -= 1;
        }

        while(trailingSpaces > 0) {
            stringToPrint += " ";
            trailingSpaces -= 1;
        }

        console.log(stringToPrint);
    }
}

function pyramid2(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

function pyramidRecursive(n, row=0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramidRecursive(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add = '';

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' ';
    }

    pyramidRecursive(n, row, level+add);
}

pyramid(4)
pyramid2(4)
pyramidRecursive(4)

module.exports = pyramid;
