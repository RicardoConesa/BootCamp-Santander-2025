//diferença entre var let e const
// var pode vazar de alguns parametros como exemplo em um if

if (true){
    var1 = 10
}
//a variavel foi pega de dentro do if
console.log(var1);

//--------------------- o mesmo não ocorre se ele estiver dentro de uma function

// assim esta function funciona
function testea(){
   var vara = 11;
   console.log(vara)
}
testea();

/* se chamar a variavel fora de função ele nao funciona

function testea(){
   var vara = 10;
}
testea();
     ------->>> console.log(vara)
*/

//--------------------------------------------------------------------------

//A variavel do tipo let se restringe a qualquer tipo de bloco
//ela não pode ser chamada fora de um bloco --> {}

if (true){
    let varlet = 12
    console.log(varlet)
}
// se ela dosse chamada a fora do {} retornaria erro
//exemplo
/* 
if (true){
    let varlet = 12
}
     console.log(varlet)
*/
//------------------------------------------------------------------------------------------------

//const é uma variavel que nao sofre alteração
//exemplo
 const varconst = 10; 
 // se tento alterar o valor dela o sistema retornara um erro.
 //varconst = 15; <------ Causa um erro
 console.log(varconst)  

