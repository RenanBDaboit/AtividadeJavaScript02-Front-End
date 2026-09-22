function contarOcorrencias(numeros, comparador) {
    let ocorrencias = 0;

    numeros.forEach(function verificarOcorrencia(numero) {
        if(numero === comparador) {
            ocorrencias++;
        }
    }); 

    return ocorrencias;
}

let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; 
let valor = 4; 
console.log(contarOcorrencias(array, valor)); // 4