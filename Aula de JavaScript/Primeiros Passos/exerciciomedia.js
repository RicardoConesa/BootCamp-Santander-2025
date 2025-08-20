

let n1 = 10;
let n2 = 3;
let n3 = 9;

const media = ((n1 + n2 +n3)/3);

console.log("A media das notas é " + media);


if (media < 5) {
    console.log(" sua Nota é menor que 5 voce foi reprovado"); 
}
else if (media >= 5 && media < 7 ) {
    console.log("Você ficou de recuperação ");
}
else
    console.log("Voce foi aprovado");    