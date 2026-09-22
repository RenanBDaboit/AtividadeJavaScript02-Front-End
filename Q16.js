const conta = {
    saldo: 25354,
    titular: "Renan",
    sacar: function sacar(valor) {
        this.saldo -= valor;
    },
    depositar: function depositar(valor) {
        this.saldo += valor;
    }
}