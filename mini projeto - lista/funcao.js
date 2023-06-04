function operacao(){
    const input = require("readline-sync")
        let sair = false
        while (sair = false){
            console.log("1 - inserir contato\n","2 - listar contatos\n","3-Buscar contato\n","4-Editar contato\n","5-remover contato\n","6-Remover contatos duplicados\n", "7-sair\n" )
            let opcao = parseInt(input.question("Digite sua opcao"))
                if(opcao == 1){
                    let nome = input.question("Digite seu nome")
                    let telefone = parseInt(input.question("Digite seu telefone"))
                    let celular = parseInt(input.question("Digite seu celular"))
                    let email = input.question("Digite seu email")
                    let dataniver = input.question("Digite sua data de aniversário")
                    let lista1 = new Lista()
                    nome = new Agenda(nome, telefone, celular, email, dataniver)
                    lista1.inserircontato(nome)
                    
                }
                else if( opcao == 2){
                    lista1.listacontatos()
                }
                else if(opcao == 3){
                    lista1.buscar(nome)
                }
                else if(opcao == 4){
                    lista1.atualiza_contato()
                }
                else if (opcao == 5){
                    lista1.remove_contato()
                }
              // else if (opcao == 6){
                    //lista1.remove_duplicados()
              // }
                else if (opcao == 7){
                    console.log("voce optou por sair")
                    break
                }
        }
    }
    operacao()