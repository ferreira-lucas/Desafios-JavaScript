function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let valores = []

for(let i = 0; i < 10; i++){
    valores[i] = Number.parseInt(getRandomArbitrary(0, 30))
    console.log(valores[i])
}

let soma = 0
for(let i = 0; i < valores.length; i++){
    soma += valores[i]
}

console.log(`Média aritmética: ${soma/valores.length}`)