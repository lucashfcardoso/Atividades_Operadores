const leia = require ('readline-sync')

let salario
let abono

salario = leia.questionFloat ("Digite o seu salário: ")
abono = leia.questionFloat ("Digite seu abono: ")

let novosalario = (salario + abono)

console.log ("Seu novo salário é de: " + novosalario)
