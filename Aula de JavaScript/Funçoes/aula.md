# Aula de Funções em JavaScript

Este arquivo explica o conteúdo de **aula.js**, que contém exemplos básicos de funções em JavaScript.

---

## 📌 1. Função simples

```js
function teste() {
    console.log("teste log")
}
teste()
teste()
```

👉 Aqui temos uma função chamada `teste()`.  
- Quando chamamos `teste()`, o navegador imprime `"teste log"`.  
- Ela foi chamada duas vezes, então o texto aparece duas vezes no console.

---

## 📌 2. Função com parâmetro

```js
function SaveName(name) {
    console.log(" Seu nome é " + name)
}
SaveName()
SaveName("Ricardo")
SaveName("Teste Nome")
```

- A função `SaveName(name)` recebe um **parâmetro** (`name`).
- Quando chamamos sem nada (`SaveName()`), o resultado será `"Seu nome é undefined"`.
- Quando passamos `"Ricardo"`, imprime `"Seu nome é Ricardo"`.

---

## 📌 3. Função com retorno

```js
function quadrado(valor){
    return valor * valor;
} 

const multvalor = quadrado(10);
console.log(multvalor)
```

- A função recebe um número e retorna o **quadrado** dele.  
- `quadrado(10)` retorna `100`.  
- O valor é armazenado em `multvalor` e exibido no console.

---

## 📌 4. Função de cálculo com juros

```js
function calculaJuros(total, juros){
    const valorDeAcrecimo = (juros / 100)* total;
    return total + juros;
}

console.log(calculaJuros(100, 15));
```

- Esta função calcula juros sobre um valor.  
⚠️ Porém, existe um **erro lógico**:  
  - O correto seria `return total + valorDeAcrecimo;`  
  - Do jeito que está, ele soma apenas o número do juros (ex: `100 + 15`).

---

✅ Este arquivo serve como introdução às funções: **definição, parâmetros, retorno e uso no console**.
