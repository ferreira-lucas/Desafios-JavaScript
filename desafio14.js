function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let valores = []

for(let i = 0; i < 20; i++){
    valores[i] = Number.parseInt(getRandomArbitrary(-20, 20))
    console.log(valores[i])
}

let contagem = 0
for(let i = 0; i < valores.length; i++){
    if(valores[i] < 0){
        contagem++
    }
}

console.log("Quantidade de números negativos: " + contagem)