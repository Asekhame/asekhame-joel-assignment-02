const assignment = require('../src/assignment.js');
function sumOfNumbers(arrayOfNumbers) {
    var sum = 0;
        //loop through the array
    for(var i=0; i < arrayOfNumbers.length; i++){
        //Add numbers
        sum += arrayOfNumbers[i];
    }
    return sum;
} maybe('Challenge - 1 : my sumNumbers function can sum an array of numbers', () => {
    const sum = [
        68,
        -68,
        27,
        94,
        72,
        -25,
        -51,
        32,
        10,
        64,
        -94,
        4,
        34,
        -86,
        90,
        81,
        20,
        -56,
        -91,
        -50
    ];
    expect(sumOfNumbers(numbers)).toBe(75);
});