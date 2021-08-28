function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let valores = []

for(let i = 0; i < 20; i++){
    valores[i] = Number.parseInt(getRandomArbitrary(0, 100))
    console.log(valores[i])
}

let par = 0, impar = 0
for(let i=0; i < valores.length; i++){
    if(valores[i]%2 == 0){
        par+=1
    }else if(valores[i]%2 != 0){
        impar+=1
    }
}
console.log("Quantidade de pares: " + par)
console.log("Quantidade de ímpares: " + impar)