let frutas = ["maçã", "banana", "laranja"];

console.log("1)");
console.log(frutas[1]);


console.log("\n\n2)");
frutas.push("manga");
console.log(frutas);


console.log("\n\n3)");
frutas.shift();
console.log(frutas);


console.log("\n\n4)");
console.log(frutas.length);


console.log("\n\n5)");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);    
}


console.log("\n\n6)");
frutas.forEach(function imprimir(fruta) {
    console.log(fruta);    
});


console.log("\n\n7)");
let tamanhoFrutas = frutas.map(function verificarTamanho(fruta) {
    return fruta.length;
});
console.log(tamanhoFrutas);


console.log("\n\n8)");
let frutasMaioresQue5 = frutas.filter(function maiores(fruta) {
    return fruta.length > 5;
});
console.log(frutasMaioresQue5);


console.log("\n\n9)");
let soma = tamanhoFrutas.reduce(function somaTotal(total, tamanho) {
    return total + tamanho;
})
console.log(soma);