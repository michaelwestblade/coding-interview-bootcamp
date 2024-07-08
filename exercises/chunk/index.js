// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunks = []
    for (let i = 0; i < array.length; i+=size) {
        chunks.push(array.slice(i, i+size));
    }

    return chunks
}

function chunk2(array, size) {
    const chunks = [];

    for (let element of array) {
        const lastChunk = chunks[chunks.length - 1];

        if (!lastChunk || lastChunk.length === size) {
            chunks.push([element]);
        } else {
            lastChunk.push(element);
        }
    }

    return chunks;
}

function chunk3(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size
    }

    return chunked;
}

console.log('chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]', chunk([1, 2, 3, 4], 2));
console.log('chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]', chunk([1, 2, 3, 4, 5], 2) );
console.log('chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]', chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) );
console.log('chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]', chunk([1, 2, 3, 4, 5], 4) );
console.log('chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]', chunk([1, 2, 3, 4, 5], 10) );

console.log('chunk2([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]', chunk2([1, 2, 3, 4], 2));
console.log('chunk2([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]', chunk2([1, 2, 3, 4, 5], 2) );
console.log('chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]', chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3) );
console.log('chunk2([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]', chunk2([1, 2, 3, 4, 5], 4) );
console.log('chunk2([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]', chunk2([1, 2, 3, 4, 5], 10) );

module.exports = chunk;
