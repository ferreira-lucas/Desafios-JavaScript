let vetorA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetorB = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

console.log("Vetor A: ".concat(vetorA))
console.log("Vetor B: ".concat(vetorB))
console.log("-------------------------")

function troca(vA, vB, size){
    for(let i = 0; i < size; i++){
        vA.push(vB[i])
        vB.push(vA[i])
    }
    for(let i = 0; i < size; i++){
        vA[i] = vA[i+size]
        vB[i] = vB[i+size]
    }
    for(let i = 0; i < size; i++){
        vA.pop()
        vB.pop()
    }
    console.log("Novo vetor A: ".concat(vA))
    console.log("Novo vetor B: ".concat(vB))
}

troca(vetorA, vetorB, vetorA.length)
