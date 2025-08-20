function modalidade(mod) {
    if (mod === 1) {
        return "dinheiro";
    } else if (mod === 2) {
        return "debito";
    } else if (mod === 3) {
        return "2vezes";
    } else {
        return "carne";
    }
}

function totalDaVenda(precoProduto, mod) {
    let condicaoPag = modalidade(mod); // pega a modalidade da primeira função
    let valorTotal = 0;

    if (condicaoPag === "debito") {
        valorTotal = precoProduto * 0.90;
        console.log("Você ganhou 10% de desconto - O total da venda é " + valorTotal.toFixed(2));
    } else if (condicaoPag === "dinheiro" || condicaoPag === "pix") {
        valorTotal = precoProduto * 0.85;
        console.log("Você ganhou 15% de desconto - O total da venda é " + valorTotal.toFixed(2));
    } else if (condicaoPag === "2vezes") {
        valorTotal = precoProduto;
        console.log("O total da venda é " + valorTotal.toFixed(2));
    } else {
        valorTotal = precoProduto * 1.10;
        console.log("O total da venda com juros é " + valorTotal.toFixed(2));
    }

    return valorTotal;
}

let precoProduto = 200;

let total = totalDaVenda(precoProduto, 2); // 2 = débito
console.log("Total final: " + total.toFixed(2));

total = totalDaVenda(precoProduto, 1); // 1 = dinheiro
console.log("Total final: " + total.toFixed(2));

total = totalDaVenda(precoProduto, 5); // 5 carne
console.log("Total final: " + total.toFixed(2));


/*

let precoProduto = 100;
let condicaoPag = "pix";
let valortotal = 0;
console.log("Preço do Produto é " + precoProduto);

console.log("Condição de pagamento é " + condicaoPag);


if ( condicaoPag == "debito"){
   valortotal = (precoProduto * 0.90 );
   console.log("Voce ganhou 10% de desconto - O total da venda é "+ valortotal  ) 
}
else if ( condicaoPag == "dinheiro"){
   valortotal = (precoProduto * 0.85 );
   console.log("Voce ganhou 15% de desconto - O total da venda é "+ valortotal  ) 
}
else if ( condicaoPag == "pix"){
   valortotal = (precoProduto * 0.85 );
   console.log("Voce ganhou 15% de desconto - O total da venda é "+ valortotal  ) 
}
else if ( condicaoPag == "2vezes"){
   valortotal = precoProduto ;
   console.log(" O total da venda é "+ valortotal  ) 
}
else {
    valortotal = (precoProduto * 1.10)
    console.log(" O total da venda com juros é é "+ valortotal  )
}

*/