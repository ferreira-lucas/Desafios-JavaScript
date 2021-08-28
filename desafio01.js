function operacoes(a = 2, b = 3){
    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = a/b

    return {soma, subtracao, multiplicacao, divisao}
}
console.log(operacoes());