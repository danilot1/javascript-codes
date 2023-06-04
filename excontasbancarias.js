class conta{
    constructor(nome, agencia, conta, saldo) {
        this.nome = nome
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }
    sacar(valor){
        this.saldo = this.saldo - valor
        return this.saldo
    }
    depositar(valor){
        this.saldo = this.saldo + valor
        return this.saldo
    }
    transferir(valor, conta){
        this.saldo = this.saldo - valor
        conta.depositar(valor)
    }
 }
 class contaCorrente extends conta{
    constructor(nome, agencia, conta, saldo, tipoConta) {
        super(nome, agencia, conta, saldo);
        this.tipoConta = tipoConta
    }
 }
 class contaPoupanca extends conta{
     constructor(nome, agencia, conta, saldo) {
         super(nome, agencia, conta, saldo);
    }
    rende(){
         this.saldo = this.saldo *1.10
        console.log("O seu dinheiro rendeu", this.saldo)
    }
 }
 let contaThiago = new contaPoupanca("Thiago", "0001", "465382-0",0)
 console.log(contaThiago)
 contaThiago.depositar(1000)
 console.log(contaThiago)
 contaThiago.rende()
 console.log(contaThiago)