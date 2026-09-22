let frutas = ["maçã", "banana", "laranja"];
console.log(frutas);


console.log("\n\n1)");
console.log(frutas[1]);


console.log("\n\n2)");
frutas.push("morango");
console.log(frutas);


console.log("\n\n3)");
frutas.shift();
console.log(frutas);


console.log("\n\n4)");
let numeros = [344, 6, 57, 24, 65, 9];
numeros.push(34);
console.log(numeros);


console.log("\n\n5)");
numeros.pop();
console.log(numeros);


console.log("\n\n6)");
numeros.unshift(6);
console.log(numeros);


console.log("\n\n7)");
numeros.shift();
console.log(numeros);


console.log("\n\n8)");
let frutas2 = ["manga", "abacaxi", "melancia"];
let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);


console.log("\n\n9)");
let novoFrutas = todasFrutas.slice(0, 2);
console.log(novoFrutas);


console.log("\n\n10)");
todasFrutas.splice(1, 1);
console.log(todasFrutas);


console.log("\n\n11)");
console.log(todasFrutas.indexOf("banana"))


console.log("\n\n12)");
let frutasM = todasFrutas.filter(function comecaComM(fruta) {
    return fruta.charAt(0) === "m";
})
console.log(frutasM);


console.log("\n\n13)");
let dobros = numeros.map(function dobrar(numero) {
    return numero * 2;
})
console.log(dobros);


console.log("\n\n14)");
todasFrutas.forEach(function imprimir(fruta) {
    console.log(fruta);
})