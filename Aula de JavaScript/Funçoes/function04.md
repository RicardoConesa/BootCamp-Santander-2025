# Modalidades de Pagamento em JavaScript

Este arquivo explica o **function04.js**, que simula condições de pagamento com descontos e juros.

---

## 📌 1. Função `modalidade`

```js
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
```

- Recebe um número e retorna a modalidade correspondente.

---

## 📌 2. Função `totalDaVenda`

```js
function totalDaVenda(precoProduto, mod) {
    let condicaoPag = modalidade(mod);
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
```

- `toFixed(2)` → garante **2 casas decimais**.  
- Aplica descontos ou juros de acordo com a modalidade.

---

## 📌 3. Exemplos de uso

```js
let precoProduto = 200;

let total = totalDaVenda(precoProduto, 2); // débito
console.log("Total final: " + total.toFixed(2));

total = totalDaVenda(precoProduto, 1); // dinheiro
console.log("Total final: " + total.toFixed(2));

total = totalDaVenda(precoProduto, 5); // carnê
console.log("Total final: " + total.toFixed(2));
```

Saída esperada:
```
Você ganhou 10% de desconto - O total da venda é 180.00
Total final: 180.00

Você ganhou 15% de desconto - O total da venda é 170.00
Total final: 170.00

O total da venda com juros é 220.00
Total final: 220.00
```

---

✅ Este exemplo mostra como **usar funções dentro de outras funções**, aplicar **regras de negócio** e formatar números.
