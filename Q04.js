function criarArray(numero) {
    let array = [];
    
    for (let i = 1; i <= numero; i++) {
        array.push(i);
    }

    return array;
}

let numero = 5; 
console.log(criarArray(numero)); // [1, 2, 3, 4, 5]