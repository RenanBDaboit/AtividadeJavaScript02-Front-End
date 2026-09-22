const conta = {
    saldo: 25354,
    titular: "Renan",
    sacar: function(valor) {
        this.saldo -= valor;
    },
    depositar: function(valor) {
        this.saldo += valor;
    }
}