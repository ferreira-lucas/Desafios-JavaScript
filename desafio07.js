let teclado = require('prompt-sync')();

console.log("Escolha uma fruta:")
let fruta = teclado();

switch(fruta){
    case "Maca":
        console.log("Não vendemos esta fruta aqui!")
        break;
    case "Kiwi":
        console.log("Estamos com escassez de kiwis!")
        break;
    case "Melancia":
        console.log("Aqui está, são 3 reais o quilo!")
        break;
    default:
        throw{
            nome: erro.name,
            msg: erro.message,
            date: new Date
        }
        break;
}