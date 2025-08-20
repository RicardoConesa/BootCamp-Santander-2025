# Cálculo de IMC em JavaScript

Este arquivo explica o **function01.js**, que calcula o IMC (Índice de Massa Corporal).

---

## 📌 1. Fórmula do IMC

```js
function calculoimc(peso, altura){
    return (peso / ( altura * altura));
}
```

- Recebe dois parâmetros: **peso** e **altura**.  
- Fórmula: `IMC = peso / (altura²)`  
- Retorna o valor do IMC.

---

## 📌 2. Classificação do IMC

```js
function classificaimc(imc){
    if (imc <= 18.5){
        return "Você está abaixo do peso";
    }
    else if (imc > 18.5 && imc <= 25){
        return "Seu peso está normal";
    }
    else if (imc > 25 && imc <= 30){
        return "Acima do peso";
    }
    else if (imc > 30 && imc <= 40){
        return "Obesidade";
    }
    else {
        return "Obesidade mórbida";
    }
}
```

- O IMC é classificado com **estruturas condicionais (`if/else if/else`)**.

---

## 📌 3. Função Principal

```js
function main(){
    let peso = 120;
    let altura = 1.97;

    const imc = calculoimc(peso, altura);

    console.log(imc);
    console.log(classificaimc(imc));
}

main();
```

- Define valores de **peso** e **altura**.  
- Calcula o IMC e classifica.  
- Mostra o resultado no console.

---

✅ Este exemplo mostra como **organizar código em funções reutilizáveis** em vez de escrever tudo de forma solta.
