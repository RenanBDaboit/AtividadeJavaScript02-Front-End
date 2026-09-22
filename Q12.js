let idades = [34, 5, 6, 78, 5, 67]; 

console.log(idades.every(function verificarMaioridade(idade) {
    return idade > 18
}));