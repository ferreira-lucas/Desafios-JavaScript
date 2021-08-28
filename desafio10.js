let teclado = require('prompt-sync')();

console.log("Digite o valor da anuidade")
let valor = teclado();
console.log("Digite o mês de pagamento:")
let mes = teclado();

function anuidade(m, v){
    let novoValor = v * Math.pow((1 + 0.05), (Number.parseInt(m) - 1))
    console.log("Novo valor a ser pago: R$" + novoValor.toFixed(2).replace(".", ","))
}

anuidade(mes, valor)