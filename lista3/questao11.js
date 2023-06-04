const readline = require("readline-sync")
let tab= parseInt(readline.question("Digite qual tabuada quer aprender"))
for (let i = 1; i<=10;i++){
    console.log(`${tab}) x ${i} =${tab*i}`)
}

