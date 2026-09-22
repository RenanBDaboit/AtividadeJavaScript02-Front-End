let numeros = [9, 46, 8, 369, 83, 56, 986, 3];
console.log(numeros);

let stringNumeros = numeros.join(", ");
console.log(stringNumeros);

numeros.reverse();
console.log(numeros);

let novoArray = numeros.slice(0, 2);
console.log(novoArray);

numeros.sort((a, b) => a - b);
console.log(numeros);

let pares = numeros.filter(function verificaPar(numero) {
    return numero % 2 === 0;    
});
console.log(pares);

let quadrados = numeros.map(function aoQuadrado(numero) {
    return numero * numero;
});
console.log(quadrados);

let soma = numeros.reduce(function somar(total, numero) {
    return total + numero;    
});
console.log(soma);

numeros.forEach(function imprimir(numero) {
    console.log(numero);
});