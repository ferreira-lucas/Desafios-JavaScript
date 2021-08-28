function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let valores = []

for(let i = 0; i < 20; i++){
    valores[i] = Number.parseInt(getRandomArbitrary(0, 100))
    console.log(valores[i])
}

let maior = 0, menor = 100
for(let i = 0; i < valores.length; i++){
    if(valores[i] > maior){
        maior = valores[i]
    }
    if(valores[i] < menor){
        menor = valores[i]
    }
}
console.log("Maior valor: " + maior)
console.log("Menor valor: " + menor)