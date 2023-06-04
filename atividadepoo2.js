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
        if(posicao==="Defesa" && idade >= 40){
            this.calcAposentadoria = 40
            let calculo = idade - this.calcAposentadoria
            console.log ("O tempo que falta para o jogador se aposentar é de ", calculo )
        }else if(posicao==="Meio campo" && idade >= 38){
            this.calcAposentadoria = 38
            let calculo = idade - this.calcAposentadoria
            console.log ("O tempo que falta para o jogador se aposentar é de ", calculo )
        }else if (posicao==="Atacante" && idade >=35){
            this.calcAposentadoria = 35
            let calculo = idade - this.calcAposentadoria
            console.log ("O tempo que falta para o jogador se aposentar é de ", calculo )
        }
    
    }
}
let joel = new jogador("joel", "defesa", "17/09/1987" , "brasileiro", 1.88, 88.6)



