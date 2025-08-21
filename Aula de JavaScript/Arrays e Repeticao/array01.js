
const notas = [];

notas.push(8);
notas.push(6);
notas.push(4);
notas.push(5);

console.log("Notas:", notas);

// Loop simples de 0 a 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Somando as notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]; // soma cada nota
}

console.log("Soma das notas:", soma);

// Calculando a média
const media = soma / notas.length;
console.log("Média das notas:", media.toFixed(2));