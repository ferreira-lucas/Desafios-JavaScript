let teclado = require('prompt-sync')();

let a, b, c
console.log("Digite o tamanho do lado A:")
a = teclado();
console.log("Digite o tamanho do lado B:")
b = teclado();
console.log("Digite o tamanho do lado C:")
c = teclado();

function triangulo(){
    if(a == b == c){
        console.log("O triângulo é Equilátero!")
    }else if(a == b || a == c || b == c){
        console.log("O triângulo é Isósceles!")
    }else if(a != b && a != c && b != c){
        console.log("O triângulo é Escaleno!")
    }
}
triangulo();