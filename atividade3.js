const leia = require('readline-sync')

let salbruto
let adcnot
let hrextras
let desc

salbruto = leia.questionFloat ("Digite o valor de seu salário bruto: ")
adcnot = leia.questionFloat ("Digite o valor de seu adicional noturno: ")
hrextras = leia.questionFloat ("Digite o valor de suas horas extras: ")
desc = leia.questionFloat ("Digite o valor do seu desconto: ")

let res = salbruto + adcnot + (hrextras * 5) - desc

console.log ("Seu salário Liquido é de: " + res)
