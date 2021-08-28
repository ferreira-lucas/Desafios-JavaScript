function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

let teclado = require('prompt-sync')();

let vetorInteiro = []
let vetorString = []
let vetorDouble = []

console.log("Vetor dos inteiros:")
for(let i = 0; i < 4; i++){
    vetorInteiro[i] = Number.parseInt(getRandomArbitrary(0, 30))
    console.log(vetorInteiro[i])
}

console.log("Vetor das Strings:")
for(let i = 0; i < 4; i++){
    vetorString[i] = geraStringAleatoria(5)
    
    console.log(vetorString[i])
}

console.log("Vetor dos doubles:")
for(let i = 0; i < 4; i++){
    vetorDouble[i] = Number.parseFloat(getRandomArbitrary(0, 30)).toFixed(2)
    console.log(vetorDouble[i])
}

console.log(`Vetores:
1 - Vetor de inteiros
2 - Vetor de Strings
3 - Vetor de doubles`)
console.log("Escolha o primeiro vetor: ")
let vetor1 = teclado();
if(vetor1 == 1){
    vetor1 = vetorInteiro
}else if(vetor1 == 2){
    vetor1 = vetorString
}else if(vetor1 == 3){
    vetor1 = vetorDouble
}
console.log("Escolha o segundo vetor: ")
let vetor2 = teclado();
if(vetor2 == 1){
    vetor2 = vetorInteiro
}else if(vetor2 == 2){
    vetor2 = vetorString
}else if(vetor2 == 3){
    vetor2 = vetorDouble
}

function concat(v1, v2){
    for(let i = 0; i < 4; i++){
        console.log("".concat(v1[i] + v2[i]))
    }
}
console.log("Vetor resultado:")
concat(vetor1, vetor2)