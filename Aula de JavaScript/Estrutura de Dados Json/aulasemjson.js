// estrutura de uma venda sem usar Json

let name = "Ricardo";
let age = 32;
let produtos = ["mouse", "teclado" , "monitor"];
let valorProdutos = [33.33, 50.00, 787.00];

function geravenda(name, produtos, valorProdutos, age){
console.log("O Comprador é " + name)
console.log("----------------")
console.log("Sua idade é "+ age)
console.log("------------")
console.log("o Produto " + produtos[0])
console.log("O valor "+ valorProdutos[0])
console.log("______________")
console.log("Obrigado")



}

geravenda(name, produtos, valorProdutos, age)