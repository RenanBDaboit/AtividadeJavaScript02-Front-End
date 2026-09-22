const carro = {
    marca:"Toyota",
    modelo:"Corolla Cross",
    ano:2026
};

console.log("\n\n1)");
console.log(carro.marca);

console.log("\n\n2)");
carro.ano = 2025;
console.log(carro);


console.log("\n\n3)");
function getIdade(carro) {
    return 2026 - carro.ano;
}
console.log(getIdade(carro));


console.log("\n\n4)");
function descricao(carro) {
    return `${carro.marca} | ${carro.modelo} | ${carro.ano}`
}
console.log(descricao(carro));