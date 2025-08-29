
// O que são Funcoes
//First Class Functions 
// Higher Order Functions

function falarMeuNome(){
    console.log('Meu Nome é Ricardo')
}
const referencia = falarMeuNome

referencia()


//Chamando uma Function dentro da outra

function nomeCompleto(falarMeuNome){
     falarMeuNome()
    console.log('Conesa Silva')
}

nomeCompleto(falarMeuNome)

//function expression e a function declaretion  Duas maneiras e declarar a função
//declaretion
 function nomedafuncao(){
    console.log('Função nome 01')
 }

 //Expression
 const nomeDeumaFuncao = function(){
    console.log('Função nome 02')
 }

 nomedafuncao()
 nomeDeumaFuncao()

 // a diferença e o hoisting