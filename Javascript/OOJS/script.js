class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor>this._saldo){
            return "Saldo insuficiente";
        }
        return this._saldo -= valor;
    }

    depositar(valor){
        return this._saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoDeCredito){
        super(agencia, numero);
        this.tipo = "Conta Corrente";
        this._cartaoDeCredito = cartaoDeCredito;
        this._saldo = 0;
    }

    get cartaoDeCredito(){
        return this._cartaoDeCredito;
    }

    set cartaoDeCredito(cartao){
        this._cartaoDeCredito = cartao;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Conta Poupança";
        this._saldo = 0;
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Conta Universitária"; 
        this._saldo = 0;
    }

    sacar(valor){
        if((valor>500)||(valor>this._saldo)){
            return 'Operação Inválida';
        }

        return this._saldo -= valor;
    }
}