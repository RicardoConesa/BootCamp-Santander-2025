
let precoCombustivel = 4.75;
let gastoMedioKm = 10 ;
let distanciaViagemKm = 280;

const custoDaViagem = ((distanciaViagemKm / gastoMedioKm)*precoCombustivel)

console.log("O gasto com combustivel é " + (custoDaViagem.toFixed(2)))


