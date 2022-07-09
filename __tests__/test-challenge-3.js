const assignment = require('../src/assignment.js');

function celsiusToFahrenheit(arrayOfNumbers) {
    //F = C×(9/5)+32
    var arr = [];
    for(var i=0; i < arrayOfNumbers.length; i++){
        var f = arrayOfNumbers[i] * (9/5) + 32;
        var truc = Math.trunc(f)
        arr.push(truc);
    }
    return arr;
}

const { celsiusToFahrenheit } = assignment;
const maybe = celsiusToFahrenheit === undefined ? test.skip : test;

maybe('Challenge - 3 : my celsiusToFahrenheit function can convert an array of temperatures', () => {
    const numbers = [
        24,
        30,
        14,
        -8,
        22,
        17,
        -5,
        25,
        2,
        25,
        10,
        10,
        28,
        33,
        39,
        28,
        23,
        -1,
        2,
        -4
    ]
    const converted = [
        75,
        86,
        57,
        17,
        71,
        62,
        23,
        77,
        35,
        77,
        50,
        50,
        82,
        91,
        102,
        82,
        73,
        30,
        35,
        24
    ];
    expect(celsiusToFahrenheit(numbers)).toEqual(converted);
});