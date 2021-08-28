function valores(inicio, fim){
    let impares = []
    if(inicio < fim){
        let aux = inicio
        for(let i = inicio; i <= fim; i++){
            if(aux%2 != 0){
                impares.push(aux)
                aux++
            }else{
                aux++
            }
        }
    }else if(inicio > fim){
        let aux = fim
        for(let i = fim; i <= inicio; i++){
            if(aux%2 != 0){
                impares.push(aux)
                aux++
            }else{
                aux++
            }
        }
    }
    return impares
}

console.log("Valores ímpares: " + valores(30,10))