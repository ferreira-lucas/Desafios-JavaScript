let teclado = require('prompt-sync')();

console.log("Digite o valor A:")
let a = teclado();
console.log("Digite o valor B:")
let b = teclado();
console.log("Escolha a operação:")
console.log("+ Soma")
console.log("- Subtração")
console.log("* Multiplicação")
console.log("/ Divisão")
let op = teclado();

function calculadora(valor1, valor2, operador){
    valor1 = Number.parseInt(valor1)
    valor2 = Number.parseInt(valor2)
    switch(operador){
        case "+":
            console.log(valor1 + valor2)
            break;
        case "-":
            console.log(valor1 - valor2)
            break;
        case "*":
            console.log(valor1 * valor2)
            break;
        case "/":
            console.log(valor1 / valor2)
            break;
        default:
            console.log("Operador inválido!")
            break;
    }
}

calculadora(a, b, op)