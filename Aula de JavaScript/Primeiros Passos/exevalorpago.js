
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

