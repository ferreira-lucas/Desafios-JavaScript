let n = [1.2, 1.5, 3.9, 4.2, 5, 6.7, 7, 8.2, 9, 9.9]

function notas(notas, size){
    for(let i = 0; i < size; i++){
        if(notas[i] >= 0 && notas[i] <= 4.9){
            console.log("Nota ".concat(notas[i], ": Conceito D"))
        }else if(notas[i] >= 5 && notas[i] <= 6.9){
            console.log("Nota ".concat(notas[i], ": Conceito C"))
        }else if(notas[i] >= 7 && notas[i] <= 8.9){
            console.log("Nota ".concat(notas[i], ": Conceito B"))
        }else if(notas[i] >= 9 && notas[i] <= 10){
            console.log("Nota ".concat(notas[i], ": Conceito A"))
        }
    }
}

notas(n, n.length)