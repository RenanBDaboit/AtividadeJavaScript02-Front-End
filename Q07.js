const prompt = require('prompt-sync')();

function ordenarContrario(array) {
    return array.reverse();
}

let array = [];

for (let i = 0; i < 3; i++) {
    array.push(Number(prompt("Digite um número")));
}

console.log(ordenarContrario(array));