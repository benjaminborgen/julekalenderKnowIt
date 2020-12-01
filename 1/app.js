const fs = require('fs');

var data = fs.readFileSync('./numbers.txt', 'utf8').split(',');

const findMissing = (num) => {
    const max = Math.max(...num); // Will find highest number
    const min = Math.min(...num); // Will find lowest number
    const missing = [];
  
    for (let i = min; i <= max; i++) {
      if (!num.includes(i)) {
        // Checking whether i (current value) present in num (argument)
        missing.push(i); // Adding numbers which are not in num (argument) array
      }
    }
    return missing;
  };
    
let sorted = data.slice().sort((a, b) => a - b);
let arr = [];

for (i = 0; i < sorted.length; i++) {
    arr.push(parseInt(sorted[i]));
}

let missing = findMissing(arr);
console.log(missing);