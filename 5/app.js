const fs = require('fs');
arr = [];
//const right, left = '-';
//const up, down = '|';
var right = 0;
var left = 0;
var up = 0;
var down = 0;
let data = fs.readFileSync('./rute.txt', 'utf8');

data.split('').forEach(ch => {
    //arr.push(ch);
    if (ch === 'H') {
        setRight();
    } else if (ch === 'L') {
        setLeft();
    } else if (ch === 'O') {
        setUp();
    } else if (ch === 'N') {
        setDown();
    } 
});

let sum = (right * up) + (left * down);
console.log(right,left, up, down);
console.log(sum);

function setLeft() {
    left++;
}

function setRight() {
    right++;
}

function setUp() {
    up++;
}

function setDown() {
    down++;
}