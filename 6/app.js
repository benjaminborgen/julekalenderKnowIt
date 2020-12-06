const fs = require('fs');
var sum = 0;
var lastInteger = 0;

data = fs.readFileSync('./godteri.txt', 'utf8').split(',');

data.forEach(element => {
    sum = sum + parseInt(element);
    let x = sum / 127;

    if (Number.isInteger(x)) { // Check if current sum of candies are of type integer
        lastInteger = x;       // Save the last integer     
    }
});

console.log('Candies each: ' + lastInteger);