//const x = { nome: null};
//console.log(JSON.stringify(x));

//------------------------

//tipos de declaração String
//"texto"
//'texto'
//`texto`

//com aspas duplas teria algum problema na minha declaração
console.log("texto sem intercalar com outra linguqguem");
//se precisar declarar algo no com aspas duplas daria algum problema e
//com as aspas simples funciona perfeitamente
console.log('<div id = "iddiv"> texto da minha div </div>');

//a baixo o template litorals com aspas invertidas ``

const variavel = "TEXTO DA VARIAVEL";
console.log(` declarando um texto <div>${variavel}`);


//----------------Symbol------------------
//Objeto imutavel unico
const x = Symbol('10');
const y = Symbol('10');

console.log(x === y)
// retorna false por que cada variavel symbol é unica