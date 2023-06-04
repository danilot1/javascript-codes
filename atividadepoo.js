class jogador {
    constructor (nome , posicao, nascimento, nacionalidade, altura, peso){
        this.nome = nome 
        this.posicao = posicao
        this.nascimento = nascimento 
        this.nacionalidade = nacionalidade 
        this.altura = altura 
        this.peso = peso 
    
    }
    calcIdade(){
        return this.nascimento - 2022 

    }
    calcAposentadoria(posicao){
        let idade = calcIdade()
        let calculo = idade - this.calcAposentadoria
        if(posicao==="Defesa" && idade >= 40){
            console.log ("O jogador está apto ")
        }else if(posicao==="Meio campo" && idade >= 38){
            console.log("O jogador está apto")
        }else if(posicao==="Atacante" && idade >=35){
            console.log ("o jogador está apto")
        }
    }
}
let joel = new jogador(posicao ="atacante", nascimento = "15/07/1988", nacionalidede = "brasileiro", altura = 1.77 , peso = 77,8)




