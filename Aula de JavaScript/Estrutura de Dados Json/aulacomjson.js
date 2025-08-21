// estrutura de uma venda sem usar Json
// estrutura de uma venda sem usar JSON
let dadosVenda = {
    name: "Ricardo",
    age: 32,
    produtos: {
        0: ["mouse", 55.00],
        1: ["teclado", 80.00],
        2: ["monitor", 657.00]
    },
    taxas: 2.5
}

console.log(dadosVenda);

function comprovante(dadosVenda) {
    console.log(`Nome do Comprador: ${dadosVenda.name}, idade: ${dadosVenda.age}`);
    console.log("Itens comprados:");

    for (let i in dadosVenda.produtos) {
        const [nome, preco] = dadosVenda.produtos[i];
        console.log(` - ${nome}: R$ ${preco.toFixed(2)}`);
    }

    console.log(`Taxa de entrega: R$ ${dadosVenda.taxas.toFixed(2)}`);
}

comprovante(dadosVenda);

/*
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

geravenda(name, produtos, valorProdutos, age)*/