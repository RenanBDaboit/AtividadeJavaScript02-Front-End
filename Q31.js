const dadosPessoais = {
    nome: "Renan",
    idade: 17
};

const dadosProfissionais = {
    cargo: "Estudante",
    empresa: "WEG"
}

const funcionarioCompleto = {...dadosPessoais, ...dadosProfissionais}

console.log(funcionarioCompleto);