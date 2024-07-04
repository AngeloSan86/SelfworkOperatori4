let numeroGatti = prompt("Inserisci il nnumero totale dei gatti:");
let numeroGattiPerFila = prompt("Inserisci quanti gatti devono stare in una fila");

let numeroFile = Math.floor(numeroGatti / numeroGattiPerFila);



let gattiMancantiPerFila = numeroGattiPerFila - Math.ceil(numeroGatti % numeroGattiPerFila);

console.log(`Il totale dei gatti e' di ${numeroGatti} e verranno disposti su ${numeroFile} file. Ogni fila conterra' ${numeroGattiPerFila} gatti, tranne l'ultima fila alla quale invece mancheranno ${gattiMancantiPerFila} gatti!`);