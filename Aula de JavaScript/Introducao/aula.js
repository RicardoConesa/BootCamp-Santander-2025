//Aula de armazenamento Variaveis

let pokemon = ["Bubassauro", "Charmander", "Raichu"]

const lv = [15 , 20 , 30]

// usamos os colchetes para pegar os dados dentro da variavel ou contante

console.log(pokemon[0])
console.log(pokemon[1])
console.log(pokemon[2])

//array

console.log(lv[0])
console.log(lv[1])
console.log(lv[2])

// Vetores Bidimencionais

let vetor1 = [
    ["Ricardo", 30, "Masculino" ],
    ["Geovana", 28, "Feminino"],
    ["Giorgia", 20, "Feminino"]
]
//exibir vetor inteiro
console.log(vetor1)

//exibir a linha inteira

console.log(vetor1[0])

// exibir somente um campo
//selecionamos a linha e o campo do array
console.log(vetor1[0][2])

console.log(vetor1[1][1])

console.log(vetor1[2][1])

//usando array com texto

console.log(vetor1[0][0]+ "Voce tem " + vetor1[0][1] + " anos e é do sexo " + vetor1[0][2] )