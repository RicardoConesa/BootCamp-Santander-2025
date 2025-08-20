# Verificação de Idade em JavaScript

Este arquivo explica o **function03.js**, que verifica se uma pessoa é maior ou menor de idade.

---

## 📌 1. Estrutura da função

```js
function verificaIdade(idade){
    if (idade >= 18){
        console.log("Você é maior de idade")
    }
    else
        console.log("Você é menor de idade");
}
```

- Recebe o parâmetro `idade`.  
- Se for **18 ou mais**, mostra `"Você é maior de idade"`.  
- Caso contrário, `"Você é menor de idade"`.

---

## 📌 2. Chamando a função

```js
verificaIdade(17)
```

- Neste caso, como `17 < 18`, o console exibirá:  
```
Você é menor de idade
```

---

✅ Este exemplo ensina o uso do `if/else` para verificar **condições simples**.
