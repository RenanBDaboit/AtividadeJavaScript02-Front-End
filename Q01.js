function calcularMedia(numeros) {
    let soma = numeros.reduce(function(total, numero) {
        return total + numero;
    }, 0);

    return soma / numeros.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));