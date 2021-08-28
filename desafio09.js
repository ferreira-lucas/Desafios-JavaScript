let teclado = require('prompt-sync')();

console.log("Digite o salário atual:")
let salario = teclado();
console.log("Digite o plano de trabalho:")
let plano = teclado();

function aumento(sal, p){
    switch(plano){
        case "A", "a":
            var novoSalario = (0.1 * Number.parseFloat(salario)) + Number.parseFloat(salario)
            console.log("Novo salário: R$" + novoSalario.toFixed(2).replace(".", ","))
            break;
        case "B", "b":
            var novoSalario = (0.15 * Number.parseFloat(salario)) + Number.parseFloat(salario)
            console.log("Novo salário: R$" + novoSalario.toFixed(2).replace(".", ","))
            break;
        case "C", "c":
            var novoSalario = (0.2 * Number.parseFloat(salario)) + Number.parseFloat(salario)
            console.log("Novo salário: R$" + novoSalario.toFixed(2).replace(".", ","))
            break;
        default:
            console.log("Plano inválido!")
            break;
    }
}

aumento(salario, plano)