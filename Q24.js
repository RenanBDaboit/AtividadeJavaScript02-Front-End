const lanche = {
    nome: "X-Burguer",
    preco: 15.00,
    ingredientes: ["pão", "hambúrguer", "queijo", "alface"]
}

console.log(`O lanche ${lanche.nome} custa R$ ${lanche.preco}`);

lanche.preco = 17.50;

lanche.vegetariano = false;

console.log(lanche);