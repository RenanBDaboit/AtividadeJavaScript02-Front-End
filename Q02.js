function filtrarNumeros(numeros, comparador) {
    let maiores = numeros.filter(function maoires(numero) {
        return numero > comparador;
    })

    return maiores;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumeros(array, num)); // [6, 7, 8, 9]