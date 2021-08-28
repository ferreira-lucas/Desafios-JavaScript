function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let valores = []

for(let i = 0; i < 20; i++){
    valores[i] = Number.parseInt(getRandomArbitrary(0, 40))
    console.log(valores[i])
}

let contagem = 0;
for(let i = 0; i < valores.length; i++){
    if(10 <= valores[i] && valores[i] <= 20){
        contagem+=1
    }
}

console.log("Dentro do intervalo: " + contagem)
console.log(`Fora da contagem: ${valores.length - contagem}`)