const leia = require ('readline-sync')

let nota1
let nota2
let nota3
let nota4

nota1 = leia.questionFloat ("Digite a nota 1: ")
nota2 = leia.questionFloat ("Digite a nota 2: ")
nota3 = leia.questionFloat ("Digite a nota 3: ")
nota4 = leia.questionFloat ("Digite a nota 4: ")

let res = ((nota1 + nota2 + nota3 + nota4) / 4)

console.log ("Sua média final é: " + res)
