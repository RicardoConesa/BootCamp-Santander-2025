
let precoCombustivel = 0;
let gastoMedioKm = 10 ;
let distanciaViagemKm = 280;
let tipoCombustivel = "diesel";



if (tipoCombustivel === "etanol") {
precoCombustivel = 4.05;
tipoCombustivel = "Etanol";
}
else if (tipoCombustivel === "gasolina"){
precoCombustivel = 5.89;    
tipoCombustivel = "Gasolina";}
else {
precoCombustivel = 7.00;   
tipoCombustivel = "Diesel";}



const custoDaViagem = ((distanciaViagemKm / gastoMedioKm)*precoCombustivel)

console.log("O gasto com combustivel é " + (custoDaViagem.toFixed(2)) + " tipo do combustivel " + tipoCombustivel)


