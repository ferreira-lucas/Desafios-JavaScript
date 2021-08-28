let vetorPilha = [1, 2, 3, 4, 5], vetorAdiciona = [6, 7, 8, 9, 10]

console.log("Vetor pilha:")
console.log(vetorPilha)

console.log("Vetor adiciona:")
console.log(vetorAdiciona)

for(let i = 0; i < 5; i++){
    vetorPilha.push(vetorAdiciona[i])
}

console.log("Novo vetor pilha:")
console.log(vetorPilha)