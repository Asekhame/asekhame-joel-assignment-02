const assignment = require('../src/assignment.js');

function countEvenNumbers(arrayOfNumbers) {
    var arr = [];
    //loop through the array
    for(var i=0; i < arrayOfNumbers.length; i++){
        //Find even number. Use modulus to get even numbers
        var even = arrayOfNumbers[i] % 2;
        if(even==0){
            arr.push(arrayOfNumbers[i]);
        }
       
    }
    return sumOfNumbers(arr);
} 
const { countEvenNumbers } = assignment;

maybe('Challenge - 2 : my countEvenNumbers function can count even numbers in array of numbers', () => {
    const arr = [
        17,
        0,
        67,
        41,
        49,
        21,
        1,
        86,
        76,
        2,
        54,
        14,
        93,
        84,
        14,
        77,
        35,
        7,
        29,
        64
    ]
    expect(countEvenNumbers(numbers)).toBe(9);
});