function calculoimc(peso, altura){
    return (peso / ( altura * altura));
}

function classificaimc(imc){
    if (imc <= 18.5){
    return" Você esta abaixo do  peso";
}
else if (imc > 18.5 && imc <= 25){
    return" Seu peso esta normal ";
}
else if (imc > 25 && imc <= 30){
    return" acima do peso ";
}
else if (imc > 30 && imc <= 40){
    return" Obesidade";
}
else {
    return" Obesidade Morbida";

} 
}

function main(){
let peso = 120;
let altura = 1.97;

const imc =  calculoimc(peso, altura);

console.log(imc);
console.log(classificaimc(imc));
}

main()







// let peso = 120;
// let altura = 1.97;

// console.log("Seu peso é " + peso);

// console.log("Sua Altura é " + altura);

// const imc = peso / ( altura * altura);

// console.log("seu imc é de "+ imc)

// if (imc <= 18.5){
//    console.log(" Você esta abaixo do  peso")
//}
//else if (imc > 18.5 && imc <= 25){
//    console.log(" Seu peso esta normal ")
//}
//else if (imc > 25 && imc <= 30){
//    console.log(" acima do peso ")
//}
//else if (imc > 30 && imc <= 40){
//    console.log(" Obesidade")
//}
//else {
//    console.log(" Obesidade Morbida")
//}