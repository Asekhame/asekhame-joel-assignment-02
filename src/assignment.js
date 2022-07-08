// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

function sumOfNumbers(arrayOfNumbers) {
    var sum = 0;
        //loop through the array
    for(var i=0; i < arrayOfNumbers.length; i++){
        //Add numbers
        sum += arrayOfNumbers[i];
    }
    return sum;
}

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


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

