let teclado = require('prompt-sync')();

console.log("Digite o dia da semana (1 à 7): ")
let dia = teclado();

switch(dia){
    case "1":
        console.log("É dia útil!")
        break;
    case "2":
        console.log("É dia útil!")
        break;
    case "3":
        console.log("É dia útil!")
        break;
    case "4":
        console.log("É dia útil!")
        break;
    case "5":
        console.log("É dia útil!")
        break;
    case "6":
        console.log("É fim de semana!")
        break;
    case "7":
        console.log("É fim de semana!")
        break;
    default:
        console.log("Dia inválido!")
        break;
}