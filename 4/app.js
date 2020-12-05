const fs = require('fs');
const antall = [3, 3, 2, 1]; // Oppskrift fordeling lik ingredienser
const ingredienser = ['melk: ', 'mel: ', 'sukker: ', 'egg: ']; // Ingredienser

data = fs.readFileSync('./leveringsliste.txt', 'utf8').split('\n');

function tellIngredienser (ingrediens, pos) {
    var total = 0;

    for (var j in data) {
        if (data[j].includes(ingrediens)) {
            var start = data[j].indexOf(ingrediens);
            
            start = start + pos; // Ingredienser
            end = start + 5; // Alle ingredienser på ordrene er femsifret
            
            n = data[j].substring(start, end);

            total = total + parseInt(n);   
        }
    }

    return total;
}


for (var i in ingredienser) {
    var pos = ingredienser[i].length; 
    var t = tellIngredienser(ingredienser[i], pos);

    t = t / antall[i];
    console.log(t);
}