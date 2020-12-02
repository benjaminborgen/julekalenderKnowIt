const { count } = require("console");
const { promises } = require("fs");

const citizens = 5433000;
const num = '7';
let deliveroo = [];
let counter = 0;
let primeNumber = 0;

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return true;
}
  
for (i = 0; i <= citizens; i++) {
    var alphanumeric = i.toString();
    
    if (alphanumeric.includes(num)) {
        for (j = primeNumber; j <= i; j++) {
            if (isPrime(j)) {
                primeNumber = j;
            }
        }
        
        i = i + primeNumber; 
    } else {
        deliveroo.push(i);
    }
}

console.log('Amount of deliveries:' + deliveroo.length);